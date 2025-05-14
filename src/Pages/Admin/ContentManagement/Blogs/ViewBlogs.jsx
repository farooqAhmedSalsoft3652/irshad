import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import CustomButton from "../../../../Components/CustomButton";
import { blogsData } from "../../../../Config/data";
import BackButton from "../../../../Components/BackButton";
import withModal from "../../../../HOC/withModal";
import { isNullOrEmpty } from "../../../../Utils/helper";
import { DashboardLayout } from "../../../../Components/Layouts/AdminLayout/DashboardLayout";
import { IoCheckmarkSharp } from "react-icons/io5";

const ViewBlogs = ({ showModal }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState({});
  useEffect(() => {
    setBlog(blogsData.detail.data.find((blog) => blog.id === id));
  }, [id]);

  const handleRemove = (id) => {
    // Open the modal for confirmation
    showModal(`Remove Blog`, `Are you sure you want to remove this Blog?`, () => onConfirmRemove(id));
  };
  const onConfirmRemove = async (id) => {
    showModal("Successful", `This blog has been removed successfully!`, () => navigate(`/admin/content-management?tab=blogs`), true);
  };

  if (isNullOrEmpty(blog)) {
    return (
      <DashboardLayout pageTitle="View Blog">
        <div className="container-fluid">
          <div className="row mb-5">
            <div className="col-12 my-4 d-flex">
              <BackButton url={`/admin/content-management?tab=blogs`} />
              <h2 className="mainTitle mb-0">View Blog</h2>
            </div>
            <div className="col-12">
              <div className="dashCard mb-4">loading...</div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout pageTitle="View Blog">
      <div className="container-fluid">
        <div className="row mb-5">
          <div className="col-12 my-4 d-flex">
            <BackButton url={`/admin/content-management?tab=blogs`} />
            <h2 className="mainTitle mb-0">View Blog</h2>
          </div>
          <div className="col-12">
            <div className="dashCard mb-4">
              <div className="row mb-3">
                <div className="col-12 col-sm-8">
                  <h4 className="secondaryLabel">Blog Title</h4>
                  <p className="secondaryText wrapText mb-0">{blog.blogTitle}</p>
                </div>
                <div className="col-12 my-4">
                  {blog.pricingOption === "premium" ? (
                    <div className="mb-4">
                      <IoCheckmarkSharp size={24} color="green" />
                      <p className="ms-2 d-inline secondaryText fw-bold">For Premium</p>
                    </div>
                  ) : (
                    <div className="mb-4">
                      <IoCheckmarkSharp size={24} color="green" />
                      <p className="ms-2 d-inline secondaryText fw-bold">For Free</p>
                    </div>
                  )}
                  {blog?.photo && <img className="containedImg roundedBorders" src={blog.photo} />}
                </div>
                {/* <div className="col-12 ">
                  <p className="secondaryLabel mb-0">{blog.content}</p>
                </div> */}
                <div className="col-12 mt-4">
                  <h4 className="secondaryText">Blog Pdf</h4>
                  <object data={blog?.blogFile} type="application/pdf" width="100%" height="800px">
                    <p>
                      If the pdf doesn't load, click <a href={blog.blogFile}> this link!</a>
                    </p>
                  </object>
                </div>
              </div>
              <div className="mt-4 mb-5 d-flex gap-3">
                <Link className="site-btn primary-btn text-decoration-none" to={"edit"}>
                  Edit
                </Link>
                <CustomButton className="site-btn secondary-btn text-decoration-none" onClick={() => handleRemove(blog.id)}>
                  Remove
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withModal(ViewBlogs);

import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Col, Dropdown, Row } from "react-bootstrap";
import { FaEdit, FaEye, FaPlus } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BackButton2 from "../../../../Components/BackButton/BackButton2";
import CustomTable from "../../../../Components/CustomTable";
import { DashboardLayout } from "../../../../Components/Layouts/AdminLayout/DashboardLayout";
import { consultantCategoryData } from "../../../../Config/data";
import { consultantCategoryHeaders } from "../../../../Config/TableHeaders";
import { consultantRequestsStatus } from "../../../../Config/TableStatus";
import withFilters from "../../../../HOC/withFilters";
import { useFormStatus } from "../../../../Hooks/useFormStatus";
import { serialNum, timeFormat2 } from "../../../../Utils/helper";

const CATEGORY_TYPES = {
  VIDEO_VERIFICATION: "video_verification",
  RULES: "rules",
  TUTORIALS: "tutorials",
  FINAL_QUIZ: "final_quiz",
};

const CATEGORY_ROUTES = {
  video_verification: {
    add: "/admin/consultant-management/add-quiz",
    view: "/admin/consultant-management/view-quiz",
    edit: "/admin/consultant-management/edit-quiz",
  },
  rules: {
    add: "/admin/consultant-management/add-rules",
    view: "/admin/consultant-management/view-rules",
    edit: "/admin/consultant-management/edit-rules",
  },
  tutorials: {
    add: "/admin/consultant-management/add-tutorial",
    view: "/admin/consultant-management/view-tutorial",
    edit: "/admin/consultant-management/edit-tutorial",
  },
  final_quiz: {
    add: "/admin/consultant-management/add-final-quiz",
    view: "/admin/consultant-management/view-final-quiz",
    edit: "/admin/consultant-management/edit-final-quiz",
  },
};

const ScreeningCategory = ({
  filters,
  setFilters,
  pagination,
  updatePagination,
}) => {
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus();
  const [consultantcategory, setCategory] = useState(
    consultantCategoryData.detail.data
  );
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryState, setCategoryState] = useState(null);

  useEffect(() => {
    // Get category state from location
    const state = location.state;
    if (state) {
      setSelectedCategory(state.categoryType);
      setCategoryState(state);
    }
  }, [location]);

  const fetchCategory = async () => {
    try {
      startSubmitting(true);
      const response = consultantCategoryData;
      if (response.status) {
        const { data, total, per_page, current_page, to } = response.detail;
        setCategory(data);
        updatePagination({
          showData: to,
          currentPage: current_page,
          totalRecords: total,
          totalPages: Math.ceil(total / per_page),
        });
      }
    } catch (error) {
      console.error("Error fetching requests:", error);
    } finally {
      stopSubmitting(false);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, [filters]);

  // const handleAddAction = (item) => {
  //   if (!selectedCategory || !categoryState) return;

  //   const routes = CATEGORY_ROUTES[selectedCategory];
  //   if (!routes) return;

  //   // For video verification quiz
  //   if (categoryState.categoryType === "video_verification") {
  //     navigate(routes.add, {
  //       state: {
  //         quizType: categoryState.quizType,
  //         categoryId: item.id,
  //         categoryName: item.category,
  //         title: categoryState.title,
  //         isQuiz: true,
  //       },
  //     });
  //   } else if (categoryState.categoryType === "rules") {
  //     navigate(routes.add, {
  //       state: {
  //         categoryType: "rules",
  //         categoryId: item.id,
  //         categoryName: item.category,
  //         title: categoryState.title,
  //         isQuiz: false,
  //       },
  //     });
  //   } else if (categoryState.categoryType === "final_quiz") {
  //     navigate(routes.add, {
  //       state: {
  //         categoryType: "final_quiz",
  //         categoryId: item.id,
  //         categoryName: item.category,
  //         title: categoryState.title,
  //         isQuiz: true,
  //       },
  //     });
  //   }
  // };

  // const handleViewAction = (item) => {
  //   if (!categoryState) return;

  //   const routes = CATEGORY_ROUTES[categoryState.categoryType];
  //   if (!routes) return;

  //   // For video verification quiz
  //   if (categoryState.categoryType === "video_verification") {
  //     navigate(routes.view, {
  //       state: {
  //         quizType: categoryState.quizType,
  //         categoryId: item.id,
  //         categoryName: item.category,
  //         title: categoryState.title,
  //         isQuiz: true,
  //       },
  //     });
  //   } else if (categoryState.categoryType === "rules") {
  //     navigate(routes.view, {
  //       state: {
  //         categoryType: "rules",
  //         categoryId: item.id,
  //         categoryName: item.category,
  //         title: categoryState.title,
  //         isQuiz: false,
  //       },
  //     });
  //   } else if (categoryState.categoryType === "final_quiz") {
  //     navigate(routes.view, {
  //       state: {
  //         categoryType: "final_quiz",
  //         categoryId: item.id,
  //         categoryName: item.category,
  //         title: categoryState.title,
  //         isQuiz: true,
  //       },
  //     });
  //   }
  // };

  return (
    <DashboardLayout pageTitle={`${categoryState?.title} Category`}>
      <div className="container-fluid">
        <div className="dashCard">
          <Row className="mb-2 page-header">
            <Col xs={12} className="">
              <div className="d-flex gap-2">
                <BackButton2 />
                <h2 className="align-self-start mainTitle mb-0">
                  {categoryState?.title} Category
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={12}>
              <CustomTable
                filters={filters}
                setFilters={setFilters}
                loading={isSubmitting}
                headers={consultantCategoryHeaders}
                pagination={pagination}
                dateFilters={[
                  {
                    title: "Requested Date",
                    from: "fromDate",
                    to: "toDate",
                  },
                ]}
                selectOptions={[
                  {
                    title: "Status",
                    options: consultantRequestsStatus,
                  },
                ]}
              >
                <tbody>
                  {consultantcategory?.map((item, index) => (
                    <tr key={item?.id}>
                      <td>
                        {serialNum(
                          (filters.page - 1) * filters.per_page + index + 1
                        )}
                      </td>
                      <td>{item?.category}</td>
                      <td>{timeFormat2(item?.update_on)}</td>
                      <td>
                        <Dropdown className="tableDropdown">
                          <Dropdown.Toggle
                            variant="transparent"
                            className="notButton classicToggle"
                          >
                            <FontAwesomeIcon icon={faEllipsisV} />
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                            align="end"
                            className="tableDropdownMenu"
                          >
                            {item.data &&
                            item.data[categoryState?.categoryType] ? (
                              <>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    navigate(
                                      CATEGORY_ROUTES[
                                        categoryState.categoryType
                                      ].view,
                                      {
                                        state: {
                                          quizType: categoryState.quizType,
                                          categoryId: item.id,
                                          categoryName: item.category,
                                          title: categoryState.title,
                                          isQuiz: categoryState.isQuiz,
                                        },
                                      }
                                    );
                                  }}
                                >
                                  <FaEye className="me-2" />
                                  View
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    navigate(
                                      `CATEGORY_ROUTES[categoryState.categoryType].edit/${item.id}`,
                                      {
                                        state: {
                                          quizType: categoryState.quizType,
                                          categoryId: item.id,
                                          categoryName: item.category,
                                          title: categoryState.title,
                                          isQuiz: categoryState.isQuiz,
                                        },
                                      }
                                    );
                                  }}
                                >
                                  <FaEdit className="me-2" />
                                  Edit
                                </Link>
                              </>
                            ) : (
                              <Link
                                to="#"
                                className="dropdown-item"
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigate(
                                    CATEGORY_ROUTES[categoryState.categoryType]
                                      .add,
                                    {
                                      state: {
                                        quizType: categoryState.quizType,
                                        categoryId: item.id,
                                        categoryName: item.category,
                                        title: categoryState.title,
                                        isQuiz: categoryState.isQuiz,
                                        categoryType:
                                          categoryState.categoryType,
                                      },
                                    }
                                  );
                                }}
                              >
                                <FaPlus className="me-2" />
                                Add
                              </Link>
                            )}
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </CustomTable>
            </Col>
          </Row>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withFilters(ScreeningCategory);

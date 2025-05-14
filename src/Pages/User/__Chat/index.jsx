import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import { AdminLayout } from "../../../Components/Layout/AdminLayout";
// import { DashboardLayout } from "../../../Components/AdminLayout/AdminLayout";
import CustomTable from "../../../Components/CustomTable";
import UseTableControls from "../../../Config/UseTableControls"; // Context States
import {
  dateFormat,
  getStatusProps,
  serialNumber,
} from "../../../Utils/helper";
import { chatForumHeaders } from "../../../Config/TableHeaders"; // Table Headers
import { generalStatus } from "../../../Config/TableStatus"; // Filter Status
import { getAll, post } from "../../../Services/Api"; //Api Service
import TableDropdown from "../../../Components/TableDropdown";
import "./style.css";
import withModal from "../../../Components/withModal"; //Higher Order Component
import { chatManageData } from "../../../Config/Data";

const ChatForumManagement = ({ showModal }) => {
  const {
    currentPage,
    setCurrentPage,
    totalRecords,
    setTotalRecords,
    totalPages,
    setTotalPages,
    searchValue,
    setSearchValue,
    selectedValue,
    setSelectedValue,
    selectedEntries,
    setSelectedEntries,
    filterFrom,
    setFilterFrom,
    showData,
    setShowData,
    filterTo,
    setFilterTo,
    loading,
    setLoading,
    selectedValueTwo,
    setSelectedValueTwo,
  } = UseTableControls();

  const [chatData, setChatData] = useState([]);
  const [sortKey, setSortKey] = useState(null);
  const [sortDirection, setSortDirection] = useState("sorting");

  //Fetch Users Function
  const fetchUsers = useCallback(
    async (filter = "") => {
      try {
        setLoading(true);
        // const url = `/admin-api/users?page=${currentPage}&search=${searchValue}&per_page=${selectedEntries}${filter}`;
        const response = chatManageData;
        // const response = await getAll(url);
        if (response.status) {
          const { data, total, per_page, current_page, to } = response.detail;
          setChatData(data);
          setShowData(to);
          setCurrentPage(current_page);
          setTotalRecords(total);
          setTotalPages(Math.ceil(total / per_page));
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    },
    [
      currentPage,
      searchValue,
      selectedEntries,
      setLoading,
      setShowData,
      setCurrentPage,
      setTotalRecords,
      setTotalPages,
    ]
  );

  //Apply Filters
  const applyFilter = () => {
    const filter = `&status=${selectedValue}&fromDate=${filterFrom}&toDate=${filterTo}`;
    fetchUsers(filter);
  };

  //Clear Filters
  const clearFilters = () => {
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // Handle sorting function
  const handleSort = (key) => {
    setSortKey((prevKey) => {
      setSortDirection((prevDirection) => {
        // If the same column is clicked, toggle the direction
        const newDirection =
          prevKey === key
            ? prevDirection === "sorting_asc"
              ? "sorting_desc"
              : "sorting_asc"
            : "sorting_asc"; // Default to ascending if a new column is clicked
  
        console.log("Sorting by:", key, "Direction:", newDirection);
        
        return newDirection;
      });
  
      // Set the new key
      return key;
    });
  };
  return (
    <AdminLayout pageTitle="Chat Forum Management">
      <section className="dashboard-page">
        <div className="page-header mb-5">
          <div className="page-title">
            <Row>
              <Col xs={12} className="gap-3 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                <h2>Chat Forum Management</h2>
                <Link
                  className="btn btn-primary width-300"
                  to="/admin/chat-forum-management/chat-forum"
                >Chat Forums</Link>
              </Col>
            </Row>
          </div>
        </div>

        <div className="content-body bg-light rounded-10 shadow-sm p-4 p-lg-4 p-xxl-4 mb-3">
          <CustomTable
            loading={loading}
            headers={chatForumHeaders}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            setSelectedEntries={setSelectedEntries}
            dateFilterTitle=""
            filterFrom={filterFrom}
            setFilterFrom={setFilterFrom}
            filterTo={filterTo}
            setFilterTo={setFilterTo}
            applyFilter={applyFilter}
            clearFilters={clearFilters}
            showingItem={showData}
            totalItems={totalRecords}
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
            sortKey={sortKey}
            sortDirection={sortDirection}
            handleSort={handleSort}
            selectOptions={[
              {
                title: "Filter By Status",
                options: generalStatus,
                selectedValue,
                setSelectedValue,
              },
              // {
              //   title: "Filter By Date",
              //   options: generalStatus,
              //   selectedValueTwo,
              //   setSelectedValueTwo,
              // },
            ]}
          >
            <tbody>
              {chatData.map((item, index) => (
              <tr key={item.id}>
                <td>
                  {serialNumber(
                    (currentPage - 1) * selectedEntries + index + 1
                  )}
                </td>
                <td>{item.full_name}</td>
                <td>{item.email}</td>
                <td>{dateFormat(item.created_at)}</td>
                <td>
                  <span className={`ms-0 status-tag ${
                    item.status_detail.toLowerCase() == "approved" ? 'green-tag' :
                    item.status_detail.toLowerCase() == "pending" ? 'yellow-tag' :
                    item.status_detail.toLowerCase() == "rejected" ? 'red-tag'
                    : ''}`}
                    >
                    {item.status_detail}
                  </span>
                </td>
                <td>
                  <TableDropdown
                    view
                    itemId={item.id}
                    linkPath="/admin/chat-forum-management/view-request"
                    statusDetail={item.status_detail}
                  />
                </td>
              </tr>
              ))}
            </tbody>
          </CustomTable>
        </div>
      </section>
    </AdminLayout>
  );
};

export default withModal(ChatForumManagement); // Bind with HOC

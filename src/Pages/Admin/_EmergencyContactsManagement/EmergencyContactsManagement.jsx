import React, { useState } from "react";
import EmergencyContactsCard from "../../../Components/EmergencyContactsCard/EmergencyContactsCard";
import { DashboardLayout } from "../../../Components/Layouts/AdminLayout/DashboardLayout";
import { Link, useNavigate } from "react-router-dom";
import { contactsData } from "../../../Config/data";
import withModal from "../../../HOC/withModal";

const EmergencyContactsManagement = ({ showModal }) => {
  const [contacts, setContacts] = useState(contactsData);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    showModal(
      "Delete Emergency Contact",
      "Are you sure you want to delete this emergency contact?",
      () => onConfirmStatusChange(id) 
    );
  };

  const onConfirmStatusChange = async (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);

    showModal(
      "Successful",
      "Emergency Contact has been deleted successfully!",
      null,
      true 
    );
  };

  const handleEdit = (id) => {
    navigate(`${id}/edit`);
  };

  return (
    <DashboardLayout pageTitle="Emergency Contacts Management">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h2 className="mainTitle my-4">Emergency Contacts Management</h2>
            <div className="dashCard my-4">
              <div className="contact-grid">
                <div className="row">
                  {contacts.map((contact) => (
                    <div className="col-md-6 col-xl-4 mb-3" key={contact.id}>
                      <EmergencyContactsCard
                        contact={contact}
                        onDelete={() => handleDelete(contact.id)} 
                        onEdit={() => handleEdit(contact.id)} 
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-3">
                <Link to={"add"} className="site-btn primary-btn text-decoration-none">
                  Add
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withModal(EmergencyContactsManagement);

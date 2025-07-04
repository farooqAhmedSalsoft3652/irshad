import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { DashboardLayout } from "../../../../Components/Layouts/AdminLayout/DashboardLayout";
import BackButton2 from "../../../../Components/BackButton/BackButton2";

const CATEGORY_STATES = {
  video_verification: {
    categoryType: 'video_verification',
    isQuiz: true,
    quizType: 'video_verification',
    title: 'Video Verification Quiz'
  },
  rules: {
    categoryType: 'rules',
    isQuiz: false,
    title: 'Rules & Regulations'
  },
  tutorials: {
    categoryType: 'tutorials',
    isQuiz: false,
    title: 'Tutorials'
  },
  final_quiz: {
    categoryType: 'final_quiz',
    isQuiz: true,
    quizType: 'final',
    title: 'Final Quiz'
  }
};

const CategoryLinks = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Set Video Verification Quiz",
      type: "video_verification",
      description: "Manage video verification quiz settings and questions"
    },
    {
      title: "Set Rules & Regulations",
      type: "rules",
      description: "Configure rules and regulations for consultants"
    },
    {
      title: "Set Tutorials",
      type: "tutorials",
      description: "Manage tutorial content and materials"
    },
    {
      title: "Set Finalize Quiz",
      type: "final_quiz",
      description: "Configure final assessment quiz"
    }
  ];

  const handleCategoryClick = (type) => {
    const categoryState = CATEGORY_STATES[type];
    navigate('/admin/consultant-management/category', {
      state: categoryState
    });
  };

  return (
    <DashboardLayout pageTitle="Category Management">
      <div className="container-fluid">
        <div className="dashCard">
          <Row className="mb-4 page-header">
            <Col xs={12} className="d-flex mb-4 mb-xl-0">
              <BackButton2 />
              <h2 className="mainTitle mb-0">Category Management</h2>
            </Col>
          </Row>

          <Row>
            {categories.map((category, index) => (
              <Col key={index} xs={12} md={6} xl={3} className="mb-4">
                <div 
                  className="category-card p-4 bg-white rounded shadow-sm cursor-pointer h-100"
                  onClick={() => handleCategoryClick(category.type)}
                  style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <h3 className="h5 mb-3">{category.title}</h3>
                  <p className="text-muted mb-0 small">{category.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CategoryLinks; 
import React, { useEffect } from 'react';
const Employee = [
  {
    id: 1,
    name: "Nazim",
    email: "nazim@gmail.com",
    password: "123",
    taskCounts: { taskNumber: 2, active: 2, complete: 1, failed: 1, newTask: 1 },
    tasks: [
      {
        taskNumber: 1,
        title: "Prepare Marketing Plan",
        desc: "Draft a detailed social media and ad campaign plan with budgets and expected conversions for the launch.",
        date: "2025-07-26",
        active: true,
        complete: false,
        failed: true,
        newTask: false
      },
      {
        taskNumber: 3,
        title: "Write Case Study",
        desc: "Prepare a case study featuring real customer success, include data, charts, and images to build trust.",
        date: "2025-07-20",
        active: true,
        complete: true,
        failed: false,
        newTask: true
      }
    ]
  },
  {
    id: 2,
    name: "Faizal",
    email: "faizal@gmail.com",
    password: "123",
    taskCounts: { taskNumber: 1, active: 1, complete: 1, failed: 0, newTask: 1 },
    tasks: [
      {
        taskNumber: 4,
        title: "Set Up Email Campaign",
        desc: "Design and schedule automated email campaign with segmented audiences, tracking links, and clear CTAs.",
        date: "2025-07-20",
        active: true,
        complete: true,
        failed: false,
        newTask: true
      }
    ]
  },
  {
    id: 3,
    name: "Asif",
    email: "asif@gmail.com",
    password: "123",
    taskCounts: { taskNumber: 4, active: 0, complete: 3, failed: 2, newTask: 2 },
    tasks: [
      {
        taskNumber: 5,
        title: "Update User Dashboard",
        desc: "Improve UI of user dashboard by adding analytics, color themes, and better navigation for all devices.",
        date: "2025-07-20",
        active: false,
        complete: true,
        failed: true,
        newTask: false
      },
      {
        taskNumber: 4,
        title: "Fix Payment Gateway",
        desc: "Debug and fix payment gateway errors, test all card and UPI flows for secure transactions without failures.",
        date: "2025-07-23",
        active: false,
        complete: false,
        failed: true,
        newTask: true
      },
      {
        taskNumber: 2,
        title: "Integrate Chat Support",
        desc: "Add live chat support feature, test mobile responsiveness, and train agents on using dashboard tools effectively.",
        date: "2025-07-24",
        active: false,
        complete: true,
        failed: false,
        newTask: true
      },
      {
        taskNumber: 5,
        title: "Optimize Database Queries",
        desc: "Identify slow queries and optimize them with indexes, caching, and better relationships to reduce load times.",
        date: "2025-07-26",
        active: false,
        complete: true,
        failed: false,
        newTask: false
      }
    ]
  },
  {
    id: 4,
    name: "Ahmad",
    email: "ahmad@gmail.com",
    password: "123",
    taskCounts: { taskNumber: 3, active: 2, complete: 0, failed: 3, newTask: 2 },
    tasks: [
      {
        taskNumber: 3,
        title: "Launch YouTube Channel",
        desc: "Create and launch official YouTube channel with brand visuals, intro video, and three initial tutorials.",
        date: "2025-07-20",
        active: true,
        complete: false,
        failed: true,
        newTask: false
      },
      {
        taskNumber: 1,
        title: "Redesign Logo",
        desc: "Create a new brand logo design, test it on all devices and finalize after team approval.",
        date: "2025-07-21",
        active: true,
        complete: false,
        failed: true,
        newTask: true
      },
      {
        taskNumber: 4,
        title: "Migrate Hosting",
        desc: "Move project to faster hosting platform, configure DNS settings, and verify SSL, emails, and backups.",
        date: "2025-07-23",
        active: false,
        complete: false,
        failed: true,
        newTask: true
      }
    ]
  },
  {
    id: 5,
    name: "Amim",
    email: "amim@gmail.com",
    password: "123",
    taskCounts: { taskNumber: 3, active: 3, complete: 3, failed: 2, newTask: 3 },
    tasks: [
      {
        taskNumber: 2,
        title: "Build Mobile App Prototype",
        desc: "Create a clickable prototype of the mobile app with all core features for client demo.",
        date: "2025-07-26",
        active: true,
        complete: true,
        failed: true,
        newTask: true
      },
      {
        taskNumber: 4,
        title: "Conduct Security Audit",
        desc: "Perform a complete security audit of the codebase and servers, fix vulnerabilities immediately.",
        date: "2025-07-20",
        active: true,
        complete: true,
        failed: true,
        newTask: true
      },
      {
        taskNumber: 5,
        title: "Create Product Brochure",
        desc: "Design an attractive product brochure with images, pricing details, and QR code links to website.",
        date: "2025-07-24",
        active: true,
        complete: true,
        failed: false,
        newTask: true
      }
    ]
  },
  {
    id: 6,
    name: "Anish",
    email: "anish@gmail.com",
    password: "123",
    taskCounts: { taskNumber: 2, active: 1, complete: 0, failed: 1, newTask: 1 },
    tasks: [
      {
        taskNumber: 3,
        title: "Write Newsletter Content",
        desc: "Write monthly newsletter with product tips, upcoming features, and special customer offers.",
        date: "2025-07-24",
        active: false,
        complete: false,
        failed: false,
        newTask: false
      },
      {
        taskNumber: 5,
        title: "Test New Features",
        desc: "Perform functional and regression testing for new features before release, report bugs immediately.",
        date: "2025-07-23",
        active: true,
        complete: false,
        failed: true,
        newTask: true
      }
    ]
  },
  {
    id: 7,
    name: "Nawed",
    email: "nawed@gmail.com",
    password: "123",
    taskCounts: { taskNumber: 3, active: 1, complete: 0, failed: 2, newTask: 2 },
    tasks: [
      {
        taskNumber: 1,
        title: "Organize Team Meeting",
        desc: "Plan and conduct a team meeting to discuss quarterly goals, blockers, and upcoming initiatives.",
        date: "2025-07-24",
        active: false,
        complete: false,
        failed: true,
        newTask: false
      },
      {
        taskNumber: 1,
        title: "Create Test Cases",
        desc: "Write test cases for login, signup, and payment modules to improve product reliability.",
        date: "2025-07-22",
        active: false,
        complete: false,
        failed: true,
        newTask: true
      },
      {
        taskNumber: 4,
        title: "Develop Admin Panel",
        desc: "Build admin panel with user management, analytics dashboard, and role-based permissions.",
        date: "2025-07-26",
        active: true,
        complete: false,
        failed: false,
        newTask: true
      }
    ]
  },
  {
    id: 8,
    name: "Kamruddin",
    email: "kamruddin@gmail.com",
    password: "123",
    taskCounts: { taskNumber: 2, active: 1, complete: 1, failed: 0, newTask: 1 },
    tasks: [
      {
        taskNumber: 4,
        title: "Update Privacy Policy",
        desc: "Revise and publish updated privacy policy on website and app with proper legal approval.",
        date: "2025-07-25",
        active: false,
        complete: true,
        failed: false,
        newTask: false
      },
      {
        taskNumber: 2,
        title: "Improve Onboarding Flow",
        desc: "Simplify user onboarding steps, add tooltips, and interactive tutorials to increase retention.",
        date: "2025-07-24",
        active: true,
        complete: false,
        failed: false,
        newTask: true
      }
    ]
  },
  {
    id: 9,
    name: "Afjal",
    email: "afjal@gmail.com",
    password: "123",
    taskCounts: { taskNumber: 3, active: 2, complete: 0, failed: 0, newTask: 2 },
    tasks: [
      {
        taskNumber: 2,
        title: "Host Webinar",
        desc: "Plan and host a live webinar to demonstrate product features and answer customer questions.",
        date: "2025-07-24",
        active: true,
        complete: false,
        failed: false,
        newTask: true
      },
      {
        taskNumber: 5,
        title: "Build Analytics Module",
        desc: "Develop an analytics module showing key metrics and trends for admin and managers.",
        date: "2025-07-24",
        active: false,
        complete: false,
        failed: false,
        newTask: false
      },
      {
        taskNumber: 4,
        title: "Create API Documentation",
        desc: "Write clear API documentation with examples and usage guides for external developers.",
        date: "2025-07-22",
        active: true,
        complete: false,
        failed: false,
        newTask: true
      }
    ]
  },
  {
    id: 10,
    name: "Salim",
    email: "salim@gmail.com",
    password: "123",
    taskCounts: { taskNumber: 2, active: 1, complete: 1, failed: 1, newTask: 1 },
    tasks: [
      {
        taskNumber: 3,
        title: "Perform Load Testing",
        desc: "Test server load capacity with multiple users and optimize performance bottlenecks immediately.",
        date: "2025-07-22",
        active: false,
        complete: true,
        failed: true,
        newTask: false
      },
      {
        taskNumber: 1,
        title: "Design Landing Page",
        desc: "Design a clean landing page with product highlights and signup form optimized for conversions.",
        date: "2025-07-26",
        active: true,
        complete: true,
        failed: true,
        newTask: true
      }
    ]
  }
];





 const Admin = {
  id: 101,
  name: 'admin',
  email: 'admin@gmail.com',
  password: '123',
};

// ✅ Function to store data
export const Setdata = () => {
  localStorage.setItem('Employee', JSON.stringify(Employee));
  localStorage.setItem('Admin', JSON.stringify(Admin));
};

// ✅ Optional: Get data function
export const Getdata = () => {
  const empData = JSON.parse(localStorage.getItem('Employee'));
  const adminData = JSON.parse(localStorage.getItem('Admin'));
  console.log("Employee data is",empData)
  console.log("Admin data is",adminData)
  return { empData, adminData };
};

// ✅ React Component to set data when mounted
const Localstorage = () => {
  useEffect(() => {
    Setdata();
    console.log('LocalStorage data saved.');
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">LocalStorage Initialized ✅</h2>
    </div>
  );
};

export default Localstorage;

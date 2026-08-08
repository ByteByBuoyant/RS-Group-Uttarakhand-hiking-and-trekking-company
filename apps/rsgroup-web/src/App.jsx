import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { AuthProvider } from "@/lib/AuthContext";

// Front-facing pages & components
import Navbar from "./Navbar";
import Footer from "./Footer";
import HomePage from "./HomePage";
import Categories from "./Categories";
import TrekDetails from "./TrekDetails";
import SelectTicket from "./SelectTicket";
import CancellationPolicy from "./CancellationPolicy";
import AllTreks from "./AllTreks";
import Contact from "./Contact";
import TermsAndConditions from "./TermsAndConditions";
import AboutUs from "./AboutUs";
import FAQs from "./FAQs";
import PrivateTours from "./PrivateTours";
import Signup from "./Signup";

// Admin pages & components
import AdminLogin from "./AdminLogin";
import AdminAuthCheck from "./AdminAuthCheck";
import AdminLayout from "./AdminLayout";
import AdminDashboard from "./AdminDashboard";
import AdminTrekCreateEdit from "./AdminTrekCreateEdit";
import AdminTrekList from "./AdminTrekList";
import AdminTrekItinerary from "./AdminTrekItinerary";
import AdminTrekInclusions from "./AdminTrekInclusions";
import AdminTrekExclusions from "./AdminTrekExclusions";
import AdminTrekAttributes from "./AdminTrekAttributes";
import AdminTrekCarry from "./AdminTrekCarry";
import AdminTrekCarrySectionModal from "./AdminTrekCarrySectionModal";
import AdminFAQList from "./AdminFAQList";
import AdminFAQCreateEdit from "./AdminFAQCreateEdit";
import AdminCategoryList from "./AdminCategoryList";
import AdminCategoryCreateEdit from "./AdminCategoryCreateEdit";
import AdminTrekEnquiries from "./AdminTrekEnquiries";
import AdminItineraryEnquiries from "./AdminItineraryEnquiries";
import AdminContactEnquiries from "./AdminContactEnquiries";

// Layout wrapper for front-facing pages
function FrontLayout() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#f4ede1] text-[#2b241d] selection:bg-[#f25b23]/30 selection:text-[#2b241d]">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Front-facing routes wrapped in layout */}
          <Route element={<FrontLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/treks/:slug" element={<TrekDetails />} />
            <Route path="/selectticket" element={<SelectTicket />} />
            <Route
              path="/cancellationPolicy"
              element={<CancellationPolicy />}
            />
            <Route path="/alltreks" element={<AllTreks />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/termsAndConditions"
              element={<TermsAndConditions />}
            />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/privateTours" element={<PrivateTours />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          {/* Admin routes */}
          <Route path="/admin-login" element={<AdminLogin />} />

          <Route element={<AdminAuthCheck />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="trek/create" element={<AdminTrekCreateEdit />} />
              <Route path="trek/edit/:id" element={<AdminTrekCreateEdit />} />
              <Route path="trek/list" element={<AdminTrekList />} />
              <Route
                path="trek/:trekId/itinerary"
                element={<AdminTrekItinerary />}
              />
              <Route
                path="trek/:trekId/inclusions"
                element={<AdminTrekInclusions />}
              />
              <Route
                path="trek/:trekId/exclusions"
                element={<AdminTrekExclusions />}
              />
              <Route
                path="trek/:trekId/attributes"
                element={<AdminTrekAttributes />}
              />
              <Route path="trek/:trekId/carry" element={<AdminTrekCarry />} />
              <Route
                path="trek/:trekId/carry/:sectionId"
                element={<AdminTrekCarrySectionModal />}
              />
              <Route path="faqs/list" element={<AdminFAQList />} />
              <Route path="faqs/create" element={<AdminFAQCreateEdit />} />
              <Route path="faqs/edit/:id" element={<AdminFAQCreateEdit />} />
              <Route
                path="category/create"
                element={<AdminCategoryCreateEdit />}
              />
              <Route
                path="category/edit/:id"
                element={<AdminCategoryCreateEdit />}
              />
              <Route path="category/list" element={<AdminCategoryList />} />
              <Route path="trek-enquiries" element={<AdminTrekEnquiries />} />
              <Route
                path="itinerary-enquiries"
                element={<AdminItineraryEnquiries />}
              />
              <Route
                path="contact-enquiries"
                element={<AdminContactEnquiries />}
              />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

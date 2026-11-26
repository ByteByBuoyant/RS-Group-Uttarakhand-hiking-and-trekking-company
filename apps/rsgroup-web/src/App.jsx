import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import { AuthProvider } from "@/lib/AuthContext";

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

// Front-facing pages & components (critical path eager, secondary lazy)
import Navbar from "./Navbar";
import Footer from "./Footer";
import HomePage from "./HomePage";
import Categories from "./Categories";
import AllTreks from "./AllTreks";

const TrekDetails = React.lazy(() => import("./TrekDetails"));
const SelectTicket = React.lazy(() => import("./SelectTicket"));
const CancellationPolicy = React.lazy(() => import("./CancellationPolicy"));
const Contact = React.lazy(() => import("./Contact"));
const TermsAndConditions = React.lazy(() => import("./TermsAndConditions"));
const AboutUs = React.lazy(() => import("./AboutUs"));
const FAQs = React.lazy(() => import("./FAQs"));
const PrivateTours = React.lazy(() => import("./PrivateTours"));
const Signup = React.lazy(() => import("./Signup"));

// Admin pages & components (lazy-loaded so visitors never download admin code)
const AdminLogin = React.lazy(() => import("./AdminLogin"));
const AdminAuthCheck = React.lazy(() => import("./AdminAuthCheck"));
const AdminLayout = React.lazy(() => import("./AdminLayout"));
const AdminDashboard = React.lazy(() => import("./AdminDashboard"));
const AdminTrekCreateEdit = React.lazy(() => import("./AdminTrekCreateEdit"));
const AdminTrekList = React.lazy(() => import("./AdminTrekList"));
const AdminTrekItinerary = React.lazy(() => import("./AdminTrekItinerary"));
const AdminTrekInclusions = React.lazy(() => import("./AdminTrekInclusions"));
const AdminTrekExclusions = React.lazy(() => import("./AdminTrekExclusions"));
const AdminTrekAttributes = React.lazy(() => import("./AdminTrekAttributes"));
const AdminTrekCarry = React.lazy(() => import("./AdminTrekCarry"));
const AdminTrekCarrySectionModal = React.lazy(() => import("./AdminTrekCarrySectionModal"));
const AdminFAQList = React.lazy(() => import("./AdminFAQList"));
const AdminFAQCreateEdit = React.lazy(() => import("./AdminFAQCreateEdit"));
const AdminCategoryList = React.lazy(() => import("./AdminCategoryList"));
const AdminCategoryCreateEdit = React.lazy(() => import("./AdminCategoryCreateEdit"));
const AdminTrekEnquiries = React.lazy(() => import("./AdminTrekEnquiries"));
const AdminItineraryEnquiries = React.lazy(() => import("./AdminItineraryEnquiries"));
const AdminContactEnquiries = React.lazy(() => import("./AdminContactEnquiries"));

// Layout wrapper for front-facing pages
function FrontLayout() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#f4ede1] text-[#2b241d] selection:bg-[#f25b23]/30 selection:text-[#2b241d]">
      <Navbar />
      <div className="flex-grow">
        <React.Suspense fallback={<div className="min-h-[60vh]" />}>
          <Outlet />
        </React.Suspense>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <React.Suspense fallback={<div className="min-h-screen bg-[#f4ede1]" />}>
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
        </React.Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;

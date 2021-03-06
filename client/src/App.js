import React from 'react'
import BookingFlightPage from './pages/BookingFlightPage';
import BookingFlights from './pages/BookingFlights';
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import BookingHotel from './pages/BookingHotel';
import BookingHotelPage from './pages/BookingHotelPage';
import Faq from './pages/Faq';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SearchHotels from './pages/SearchHotels';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ChoosePayment from "./pages/ChoosePayment";
import Paypal from './pages/Paypal';
import Square from './pages/Square';
import { useSelector } from "react-redux";
import { selectUser } from "./redux/userSlice"
import { selectAlert } from "./redux/alertSlice";
import SimpleAlert from "./components/Alert";
import SearchFlight from './pages/SearchFlight';
import FlightDetail from "./pages/FlightDetail";
import TermsAndCondition from './pages/TermsAndCondition';




function App() {
  // trave -agency functions
  const currentUser = useSelector(selectUser);
  const showAlert = useSelector(selectAlert);

  const RequireAuth = (({ children }) => {
    return currentUser ? children : <Navigate to="/login" />
  })
  const RequireAdmin = (({ children }) => {
    return currentUser.isAdmin ? children : <Navigate to="/" />
  })
  const Login = (({ children }) => {
    return currentUser ? <Navigate to="/" /> : children
  });
  return (
    <div className="App">
      {showAlert &&
        <SimpleAlert />
      }
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/book-hotel-page" element={<BookingHotel />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/search-flights" element={<SearchFlight />} />
          <Route path="/search-hotels" element={<SearchHotels />} />
          <Route path='/flight-booking' element={<FlightDetail />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/TermsAndCondition" element={<TermsAndCondition />} />
          <Route path="/flight-checkout" element={
            <RequireAuth>
              <BookingFlightPage />
            </RequireAuth>
          } />
          <Route path="/hotel-checkout" element={
            <RequireAuth>
              <BookingHotelPage />
            </RequireAuth>
          } />
          <Route path="/login" element={
            <Login>
              <SignIn />
            </Login>
          } />
          <Route path="/signup" element={
            <Login>
              <SignUp />
            </Login>
          } />
          <Route path="/choose-payment" element={
            <RequireAuth>
              <ChoosePayment />
            </RequireAuth>
          } />
          <Route path="/paypal" element={
            <RequireAuth>
              <Paypal />

            </RequireAuth>
          } />
          <Route path="/square" element={
            <RequireAuth>
              <Square />

            </RequireAuth>
          } />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

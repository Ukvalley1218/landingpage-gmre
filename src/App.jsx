import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Page Imports
import HeroSection from './Components/DubaiWealthHero'
// import Second from './Components/WorkedWithSection'
import Third from './Components/BookFeaturesSection'
import Four from './Components/AuthorSection'
import Five from './Components/ImageGallerySection'
import Six from './Components/TestimonialsSection'
import Seven from './Components/LearningSection'
import Eight from './Components/TargetAudienceSection'
import Nine from './Components/BookContentsSection'
// import PrivacyPolicy from './Components/PrivacyPolicy'
import EightPointFive from './Components/InsideStrategy'
import Newthree from './Components/FAQSection'
import PaymentPolicy from './Components/PaymentPolicy'
import Fixedfooter from './Components/Fixedfooter'

// import TestIcon from './pages/Test'
import CheckoutPage from './Components/CheckoutJJ'
import SuccessPage from './Components/SuccessPage'
import PrivacyPolicy from './Components/PrivacyPolicy'
import TermsAndConditions from './Components/TermsAndConditions'
import ReturnPolicy from './Components/ReturnPolicy'
import ShippingPolicy from './Components/ShippingPolicy'
import CookiePolicy from './Components/CookiePolicy'
import UTMTracker from './Components/UTMTracker'
import RecentPurchasePopup from './Components/RecentPurchasePopup'
import CenterOfferPopup from './Components/CenterOffPopup'
import NotFound from './Components/NotFound'
const App = () => {
  return (
    <>
    <UTMTracker />
      <Routes>
                <Route path="*" element={<NotFound />} />

        {/* Home Page Route */}
        <Route
          path="/books/gmre/"
          element={
            <div className='overflow-x-hidden'>
              <HeroSection />
              {/* <Second /> */}
              <Third />
              <Four />
              <Five />
              <Six />
              <Seven />
              <Eight />
              <EightPointFive />
              <Nine />
             
              
              <Newthree />
              
              <Fixedfooter />
              <RecentPurchasePopup />
<CenterOfferPopup />  
            </div>
          }
        />


    <Route path='/books/gmre/checkout' element={<CheckoutPage/>}/>
    <Route path='/success' element={<SuccessPage/>}/>
    <Route path='/books/gmre/privacy-policy' element={<PrivacyPolicy/>}/>
    <Route path='/books/gmre/terms' element={<TermsAndConditions/>}/>
    <Route path='/books/gmre/return-policy' element={<ReturnPolicy/>}/>
    <Route path='/books/gmre/shipping-policy' element={<ShippingPolicy/>}/>
        <Route path='/books/gmre/cookie-policy' element={<CookiePolicy/>}/>
         <Route path='/books/gmre/payment-policy' element={<PaymentPolicy/>}/>

    
       
      </Routes>
    </>
  )
}

export default App

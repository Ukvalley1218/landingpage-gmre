import { Check, CreditCard, Shield, ShoppingCart, X, Trash2, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import book from '../assets/book3.webp'
import { ArrowLeft } from "lucide-react";



export default function CheckoutPage() {
   const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

const selectedType = params.get("type") || "ebook";

const reference = 
  params.get("reference") ||
  sessionStorage.getItem("reference") || "direct";
 
const utm_source = sessionStorage.getItem("utm_source");
const utm_medium = sessionStorage.getItem("utm_medium");
const utm_campaign = sessionStorage.getItem("utm_campaign");
const utm_content = sessionStorage.getItem("utm_content");
  const [showForm, setShowForm] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [loading, setloading] = useState(false);
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");
  const [country, setCountry] = useState("India");

  const [countryCodes, setCountryCodes] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91"); // Default India

  const [couponCode, setCouponCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponError, setCouponError] = useState("");
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  const [availableCoupons, setAvailableCoupons] = useState([]);
  const [selectedCoupon, setSelectedCoupon] = useState(null);  // store selected coupon

  // country states and city
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [selectedStateId, setSelectedStateId] = useState("");







  const [pricing, setPricing] = useState({
    ebook: { actual: 499, discount: 99 },
    hardcopy: { actual: 2499, discount: 899 },
    combo: { actual: 998, discount: 899 },
  });

  const [cartItems, setCartItems] = useState([
    { id: "ebook", name: "E-Book", price: pricing.ebook.discount, quantity: selectedType === "ebook" ? 1 : 0 },
    { id: "hardcopy", name: "Hardcover", price: pricing.hardcopy.discount, quantity: selectedType === "hardcopy" ? 1 : 0 },
  ]);



  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    city_id: "",
    state: "",
    pincode: "",
    country: "India",
  });



  // Fetch location
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        const ipCountryName = data.country_name?.trim() || "Other";

        let updatedCurrency = "USD";
        let updatedSymbol = "$";
        let updatedPricing = {};

        if (ipCountryName === "India") {
          updatedCurrency = "INR";
          updatedSymbol = "₹";

          updatedPricing = {
            ebook: { actual: 499, discount: 99 },
            hardcopy: { actual: 2499, discount: 899 },
            combo: { actual: 998, discount: 899 },
          };

        } else if (
          ipCountryName === "United Arab Emirates" ||
          ipCountryName === "UAE" ||
          ipCountryName === "Dubai"
        ) {
          updatedCurrency = "AED";
          updatedSymbol = "د.إ";

          updatedPricing = {
            ebook: { actual: 20.45.toFixed(2), discount: 12 },        // ~12 AED
            hardcopy: { actual: (2499 / 83).toFixed(2), discount: 37.28 }, // ~37 AED
            combo: { actual: (998 / 83).toFixed(2), discount: 37.28 },
          };

        } else {
          updatedCurrency = "USD";
          updatedSymbol = "$";

          updatedPricing = {
            ebook: { actual: 5.63, discount: 1.12 },        // ~1.12 USD
            hardcopy: { actual: (2499 / 83).toFixed(2), discount: 10.14 },   // ~10 USD
            combo: { actual: (998 / 83).toFixed(2), discount: 10.14 },
          };
        }

        setCountry(ipCountryName);
        setCurrency(updatedCurrency);
        setSymbol(updatedSymbol);
        setPricing(updatedPricing);
        setFormData((prev) => ({ ...prev, country: ipCountryName }));
      } catch (error) {
        setCountry("Other");
      }
    };

    const fetchCountryCodes = async () => {
      try {
        const res = await fetch("https://drmamatajain.valleyhoster.com/api/getCountryCode");
        const data = await res.json();
        // console.log(data)
        setCountryCodes(data);
      } catch (error) {
        console.error("Failed to load country codes", error);
      }
    };

    const fetchCoupons = async () => {
      try {
        const res = await fetch("https://drmamatajain.valleyhoster.com/api/getCoupons");
        const data = await res.json();
        if (data.status) {
          setAvailableCoupons(data.data);
        }
      } catch (error) {
        console.error("Error loading coupons", error);
      }
    };

    // country 
    const fetchCountries = async () => {
      try {
        const res = await fetch("https://drmamatajain.valleyhoster.com/api/locations?type=country");
        const data = await res.json();
        if (data.status) {
          setCountries(data.data);

          // Default country = India
          const india = data.data.find(c => c.name === "India");
          if (india) {
            setSelectedCountryId(india.id);
            loadStates(india.id);
          }
        }
      } catch (err) {
        console.error("Country load error", err);
      }
    };

    fetchCountries();

    fetchCoupons();

    fetchCountryCodes();

    fetchLocation();
  }, []);

  // loader for states
  const loadStates = async (countryId) => {
    try {
      const res = await fetch(
        `https://drmamatajain.valleyhoster.com/api/locations?type=state&country_id=${countryId}`
      );
      const data = await res.json();
      if (data.status) {
        setStates(data.data);
      }
    } catch (err) {
      console.error("State load error", err);
    }
  };

  // loader for states
  const loadCities = async (stateId) => {
    try {
      const res = await fetch(
        `https://drmamatajain.valleyhoster.com/api/locations?type=city&state_id=${stateId}`
      );
      const data = await res.json();
      if (data.status) {
        setCities(data.data);
      }
    } catch (err) {
      console.error("City load error", err);
    }
  };



  // Update cart when pricing changes
  useEffect(() => {
    setCartItems((prev) =>
      prev.map((item) => ({
        ...item,
        price: pricing[item.id]?.discount || item.price,
        actual: pricing[item.id]?.actual || item.actual,
      }))
    );
  }, [pricing]);
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: 0 } : item)));
  };

  const getTotalPrice = () => {
    const ebookItem = cartItems.find(i => i.id === "ebook") || { quantity: 0 };
    const hardcopyItem = cartItems.find(i => i.id === "hardcopy") || { quantity: 0 };

    const ebookQty = ebookItem.quantity;
    const hardcopyQty = hardcopyItem.quantity;

    const ebookActual = pricing.ebook.actual;
    const hardcopyActual = pricing.hardcopy.actual;
    const comboActual = pricing.combo.actual;

    const ebookPrice = pricing.ebook.discount;
    const hardcopyPrice = pricing.hardcopy.discount;
    const comboPrice = pricing.combo.discount;

    // Calculate combo items (pairs)
    const comboQty = Math.min(ebookQty, hardcopyQty);

    // Remaining qty after forming combo
    const remainingEbookQty = ebookQty - comboQty;
    const remainingHardcopyQty = hardcopyQty - comboQty;

    // 💰 Actual MRP Total (without discount)
    const totalActual =
      comboQty * comboActual +
      remainingEbookQty * ebookActual +
      remainingHardcopyQty * hardcopyActual;

    // 🎯 Discounted Total
    let totalDiscounted =
      comboQty * comboPrice +
      remainingEbookQty * ebookPrice +
      remainingHardcopyQty * hardcopyPrice;

    // 🎟️ Apply coupon discount if any
    if (discountPercent > 0) {
      totalDiscounted = totalDiscounted - (totalDiscounted * discountPercent) / 100;
    }

    return { totalActual, totalDiscounted };
  };
  const { totalActual, totalDiscounted } = getTotalPrice();
  const applyCouponToPrice = () => {
    if (!selectedCoupon) {
      alert("Please select a coupon to apply.");
      return;
    }

    if (discountPercent > 0) {
      alert("A coupon is already applied. Remove it before applying another.");
      return;
    }

    setDiscountPercent(Number(selectedCoupon.discount_value));
    alert(`Coupon Applied! You saved ${selectedCoupon.discount_value}%`);
  };



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProceedPayment = async () => {


    const bookType = cartItems.filter(item => item.quantity > 0).length === 2
      ? "combo"
      : cartItems.find(item => item.quantity > 0)?.id || "ebook";
    const totalAmountToPay = getTotalPrice();

    const ebookQty = cartItems.find(i => i.id === "ebook")?.quantity || 0;
    const hardcopyQty = cartItems.find(i => i.id === "hardcopy")?.quantity || 0;

    const bookQuantities = {
      ebook: ebookQty,
      hardcopy: hardcopyQty
    };

    // const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    // const requiredFields = ["name","address", "country", "state", "city"];
    // for (const field of requiredFields) {
    //   if (!formData[field]?.trim()) {
    //     alert(`Please Enter ${capitalize(field)}`);
    //     return;
    //   }
    // }

    if (!formData.name.trim()) {
      alert("Please Enter Full Name")
      return;
    }
    if (!formData.phone.trim()) {
      alert("Please Enter Contact Number")
      return;
    }
    if (!formData.email.trim()) {
      alert("Please Enter Email ID")
      return;
    }
    if (!formData.address.trim()) {
      alert("Please Enter Full Address")
      return;
    }
    if (!formData.country.trim()) {
      alert("Please Select Country")
      return;
    }
    if (!formData.state.trim()) {
      alert("Please Select State")
      return;
    }
    if (!formData.city.trim()) {
      alert("Please Select City")
      return;
    }
    if (!formData.pincode.trim()) {
      alert("Please Enter Postal Code")
      return;
    }

    if (!/^\d{7,15}$/.test(formData.phone)) {
      alert("Enter A Valid Phone Number");
      return;
    }


    if (!/^[a-zA-Z ]+$/.test(formData.name)) {
      alert("Enter A Valid Name (Letters Only)");
      return;
    }

    if (!formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/)) {
      alert("Enter A Valid Email");
      return;
    }


    if (!/^[a-zA-Z\s]+$/.test(formData.city.trim())) {
      alert("City Should Only Contain Letters.");
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(formData.state.trim())) {
      alert("State Should Only Contain Letters.");
      return;
    }

    setIsProcessing(true);

    try {

      const paymentRes = await fetch(
        "https://testingdrmamatajain.valleyhoster.com/api/createPayment_t3",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            mobile: formData.phone,
            email: formData.email,
            address: formData.address,
            city: formData.city,
            state: formData.state,
            pincode: formData.pincode,
            phone_code: selectedCountryCode,  // 👈 ADD THIS
            coupon_code: discountPercent > 0 ? selectedCoupon?.coupon_code : null,
            country,
            form_country: formData.country,
            book_type: bookType,
            reason:"books",
            book_quantity: bookQuantities,    // <-- 🔥 ADD THIS FIELD
            book_code: "gmre",
            book_name: "Guerrilla Marketing in Real Estate",
            book_link:
              "https://drive.google.com/drive/folders/1DBla0u6dl3uXbX6KJ11UA5sUtc7fCjiB",
            book_amount: totalAmountToPay.totalDiscounted.toString(),
            currency,
            form_currency: null,
reference,

  // 🆕 ADD THESE
  utm_source,
  utm_medium,
  utm_campaign,
  utm_content,          }),
        }
      );

      const data = await paymentRes.json();
      console.log("📦 Payment API Response:", data);
      if (!data.success) {
        alert("Payment initiation failed!");
        setIsProcessing(false);
        return;
      }

      if (data.gateway === "razorpay") {
        const fullPhone = selectedCountryCode.replace("+", "") + formData.phone;
        console.log("phone number", fullPhone);
        const options = {
          key: data.key,
          amount: data.amount,
          currency: data.currency,
          name: "Guerrilla Marketing in Real Estate",
          description: "Book Purchase",
          order_id: data.order_id,
          handler: async function (response) {
            setloading(true);
            try {
              const verifyRes = await fetch(
                "https://drmamatajain.valleyhoster.com/api/verifyPayment_t2",
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature,
                    gateway: "razorpay",
                    book_code: "efrs",
                  }),
                }
              );

              const verifyData = await verifyRes.json();
              if (verifyData.success) {
                if (selectedCoupon) {
                  await fetch("https://drmamatajain.valleyhoster.com/api/applyCoupon", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      coupon_code: selectedCoupon.coupon_code,
                      email: formData.email,
                      mobile: formData.phone,
                    }),
                  });
                }
                navigate("/books/gmre/success?gateway=razorpay");
              }
              else alert("⚠️ Payment verification failed!");
            } finally {
              setloading(false);
            }
          },
          prefill: {
            name: data.name,
            email: data.email,
            contact: fullPhone,
          },
          theme: { color: "#7B4BB6" },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } else if (data.gateway === "stripe") {
        const stripe = window.Stripe(data.key);
        const result = await stripe.redirectToCheckout({
          sessionId: data.session_id,
        });
        if (selectedCoupon) {
          await fetch("https://drmamatajain.valleyhoster.com/api/applyCoupon", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              coupon_code: selectedCoupon.coupon_code,
              email: formData.email,
              mobile: formData.phone,
            }),
          });
        }
        if (result.error) alert("Stripe Payment Failed: " + result.error.message);
      }
    } catch (err) {
      alert(err.message);
      console.log(err)
    } finally {
      setIsProcessing(false);
    }
  };
  // Load Payment SDKs
  useEffect(() => {
    if (!window.Razorpay) {
      const razorpayScript = document.createElement("script");
      razorpayScript.src = "https://checkout.razorpay.com/v1/checkout.js";
      document.body.appendChild(razorpayScript);
    }

    if (!window.Stripe) {
      const stripeScript = document.createElement("script");
      stripeScript.src = "https://js.stripe.com/v3/";
      document.body.appendChild(stripeScript);
    }
  }, []);


  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="relative w-full">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-0 left-0 lg:left-44 flex items-center gap-2 
               bg-gray-600 hover:bg-white text-white hover:text-black
               px-4 py-2 rounded-full shadow-sm transition"
        >
          <ArrowLeft size={18} />
          <span className="hidden sm:block">Back</span>
        </button>
      </div>

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mb-12 lg:mb-0 mt-12 lg:mt-16">

        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="bg-[#C89B3C] p-6 sm:p-10 text-white flex flex-col justify-start">


            <p className="text-xs sm:text-sm mb-6 text-center lg:text-left">
              You can add both Hardcover & E-Book to avail the best savings.
            </p>

            {/* BIG BOOK IMAGE */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <img loading = "lazy"
                src={book}
                alt="Main Book"
                className="w-44 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 rounded-xl shadow-lg object-cover"
              />
            </div>

            {/* ITEMS WITH 0 QUANTITY */}
            <div className="space-y-3 sm:space-y-4 w-full max-w-md mx-auto lg:mx-0">
              {cartItems
                .filter((item) => item.quantity === 0)
                .map((item) => (
                  <button
                    key={item.id}
                    onClick={() => increaseQty(item.id)}
                    className="flex items-center cursor-pointer justify-between bg-white/20 border border-white/30
        text-white px-4 py-3 sm:px-5 sm:py-4 rounded-xl w-full hover:bg-white/30 transition"
                  >
                    {/* Left Part */}
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Thumbnail */}
                      <img loading = "lazy"
                        src={item.image || book}
                        alt={item.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
                      />

                      {/* Icon + Text */}
                      <span className="text-sm sm:text-base flex items-center gap-2 font-medium">
                        <Plus size={18} className="inline-block" />
                        Add {item.name}
                      </span>
                    </div>

                    {/* Right Price */}
                    <span className="text-sm sm:text-base font-semibold flex items-center gap-2 text-right">
                      <span className="line-through text-gray-300">{symbol}{item.actual}</span>
                      <span>{symbol}{item.price}</span>
                    </span>
                  </button>
                ))}
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="p-6 sm:p-10 flex flex-col bg-gray-50">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Your Cart
            </h2>

            <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 border space-y-4 max-h-[400px] overflow-y-auto">
              {cartItems
                .filter((item) => item.quantity > 0)
                .map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b pb-3 gap-2 w-full flex-nowrap overflow-hidden"
                  >
                    {/* Thumbnail */}
                    <img loading = "lazy"
                      src={item.image || book}
                      alt={item.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover flex-shrink-0"
                    />

                    {/* Name */}
                    <span className="font-medium text-xs sm:text-base w-20 sm:w-40 flex-shrink truncate">
                      {item.name}
                    </span>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="w-6 h-6 sm:w-8 sm:h-8 flex cursor-pointer items-center justify-center bg-gray-200 text-sm sm:text-lg rounded"
                      >
                        −
                      </button>

                      <span className="font-semibold min-w-[18px] text-center text-sm sm:text-base">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="w-6 h-6 sm:w-8 sm:h-8 flex cursor-pointer items-center justify-center bg-gray-200 text-sm sm:text-lg rounded"
                      >
                        +
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right flex-shrink-0 min-w-[55px] sm:min-w-[80px]">
                      <span className="text-[10px] sm:text-xs text-gray-500 line-through block leading-none">
                        {symbol}
                        {(pricing[item.id].actual * item.quantity).toLocaleString()}
                      </span>

                      <span className="font-bold text-gray-900 text-xs sm:text-sm">
                        {symbol}
                        {(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>

                    {/* Trash */}
                    <Trash2
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 cursor-pointer flex-shrink-0 ml-1 sm:ml-2"
                      size={16}
                    />
                  </div>
                ))}



              <div className="flex justify-between items-center text-lg sm:text-xl font-bold pt-4">
                <span>Total:</span>

                <div className="text-right">
                  <span className="text-gray-500 line-through mr-2">
                    {symbol}{Number(totalActual).toLocaleString()}
                  </span>
                  <span className="text-gray-900">
                    {symbol}{Number(totalDiscounted).toLocaleString()}
                  </span>
                </div>
              </div>

            </div>

            {/* Coupons Section */}
            {availableCoupons.length > 0 && (
              <div className="mt-6 bg-white p-4 rounded-xl shadow-sm border max-h-[250px] overflow-y-auto">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Available Coupons
                </label>

                {availableCoupons.map((coupon) => (
                  <button
                    key={coupon.id}
                    onClick={() => {
                      if (discountPercent > 0) {
                        alert("You already applied a coupon. Remove it before selecting another.");
                        return;
                      }
                      setSelectedCoupon(coupon);
                    }}
                    className={`w-full flex justify-between items-center px-4 py-3 mb-2 rounded-lg border 
${selectedCoupon?.coupon_code === coupon.coupon_code
                        ? "border-teal-600 bg-teal-50"
                        : "border-gray-300 bg-gray-50"
                      }`}
                  >
                    <span>{coupon.coupon_name} - Save {coupon.discount_value}%</span>
                    <span className="text-teal-600 font-semibold">
                      {selectedCoupon?.coupon_code === coupon.coupon_code ? "Selected" : "Apply"}
                    </span>
                  </button>
                ))}

                {selectedCoupon && discountPercent === 0 && (
                  <button
                    onClick={applyCouponToPrice}
                    className="mt-2 w-full bg-teal-600 text-white py-2 rounded-lg"
                  >
                    Apply Coupon to Price
                  </button>
                )}

                {discountPercent > 0 && (
                  <>
                    <p className="text-green-600 text-sm mt-2">
                      Coupon Applied! {discountPercent}% discount included in price.
                    </p>
                    <button
                      onClick={() => {
                        setDiscountPercent(0);
                        setSelectedCoupon(null);
                        alert("Coupon removed!");
                      }}
                      className="mt-3 w-full bg-red-500 text-white py-2 rounded-lg"
                    >
                      Remove Coupon
                    </button>
                  </>
                )}
              </div>
            )}

            {/* Sticky Checkout Button */}
            <div className="mt-6 sticky bottom-0  pt-4">
              <button
                onClick={() => {
                  if (cartItems.filter((item) => item.quantity > 0).length === 0) {
                    alert("Your Cart Is Empty! Please Add At Least One Item Before Checkout.");
                    return;
                  }
                  setShowForm(true);
                }}
                className="w-full bg-[#C89B3C] cursor-pointer text-white py-4 font-bold rounded-full text-base sm:text-xl flex items-center justify-center gap-2 shadow-lg"
              >
                <ShoppingCart size={20} />
                Checkout –
                <span className="line-through opacity-80 ml-2 mr-1">
                  {symbol}{Number(totalActual).toLocaleString()}
                </span>
                <span>
                  {symbol}{Number(totalDiscounted).toLocaleString()}
                </span>
              </button>

            </div>

          </div>
        </div>
      </div>

      {/* 🔥 Add Floating Contact Button Here */}
      <a
        href="mailto:mamata@DrMamataJain.com"
        className="
          fixed 
          bottom-5 
          right-5 
          z-50 
          bg-[#5B3EA8] 
          text-white 
          px-3 
          py-3 
          rounded-full 
          shadow-lg 
          flex 
          items-center 
          gap-2 
          hover:bg-[#472f85] 
          transition-all 
          text-sm 
          sm:text-sm
        "
        target="blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
          <path d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>

        Contact Support
      </a>







      {/* Popup Form */}
      {/* Popup Form */}
      {
        showForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
            <div className="bg-white w-full max-w-md md:max-w-lg shadow-2xl p-6 sm:p-8 relative animate-fade-in-up overflow-y-auto max-h-[90vh]">
              {/* Close Button */}
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-gray-500 cursor-pointer hover:text-gray-800 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Enter Your Details
              </h3>

              {/* Form Fields */}
              <div className="space-y-4">

                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Full Name<span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Full Name"
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck="false"
                    value={formData.name}
                    onInput={(e) => {
                      const value = e.target.value;
                      if (/^[A-Za-z ]*$/.test(value)) {
                        setFormData((prev) => ({ ...prev, name: value }));
                      }
                    }}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-base text-black placeholder:text-gray-400 focus:ring-2 focus:ring-teal-600 outline-none"
                    required
                  />
                </div>


                {/* Contact Number */}
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Contact Number<span className="text-red-500">*</span>
                  </label>

                  <div className="flex gap-2 items-center">

                    {/* Country Code Dropdown */}
                    <div className="relative w-16 xs:w-20 sm:w-20 lg:w-20">

                      <div className="border border-gray-300 rounded-xl px-2 py-2 bg-white text-black flex items-center justify-between">
                        {selectedCountryCode || "+91"}

                        <svg
                          className="h-4 w-4 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>

                      <select
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        value={selectedCountryCode}
                        onChange={(e) => setSelectedCountryCode(e.target.value)}
                      >
                        {countryCodes.map((code) => (
                          <option key={code.id} value={`+${code.phonecode}`}>
                            {code.nicename} (+{code.phonecode})
                          </option>
                        ))}
                      </select>

                    </div>

                    {/* Phone Input */}
                    <input
                      type="text"
                      name="phone"
                      placeholder="Enter Contact Number"
                      autoComplete="new-phone"
                      autoCorrect="off"
                      spellCheck="false"
                      value={formData.phone}
                      onInput={(e) => {
                        if (/^\d*$/.test(e.target.value)) {
                          setFormData({ ...formData, phone: e.target.value });
                        }
                      }}
                      minLength={7}
                      maxLength={15}
                      className="flex-1 min-w-0 flex-shrink border border-gray-300 rounded-xl px-2 py-2 
               text-black bg-white focus:ring-2 focus:ring-teal-500 
               focus:border-teal-500 transition-all outline-none"
                      required
                    />
                  </div>

                </div>


                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email ID<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email ID"
                    autoComplete="new-email"
                    autoCorrect="off"
                    spellCheck="false"
                    value={formData.email}
                    onInput={(e) =>
                      setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-base text-black placeholder:text-gray-400 focus:ring-2 focus:ring-teal-600 outline-none"
                    required
                  />
                </div>

                {/* Address */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Address<span className="text-red-500">*</span>
                    </label>

                    <textarea
                      name="address"
                      placeholder="Enter Full Address (House No, Street, Area, Landmark)"
                      autoComplete="new-address"
                      autoCorrect="off"
                      spellCheck="false"
                      value={formData.address}
                      onInput={(e) => {
                        if (/^[a-zA-Z0-9\s,.-/]*$/.test(e.target.value)) {
                          setFormData({ ...formData, address: e.target.value });
                        }
                      }}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 text-base text-black focus:ring-2 focus:ring-teal-600 outline-none min-h-[90px] resize-none"
                      maxLength={250}
                      required
                    ></textarea>

                    <p
                      className={`text-right text-sm mt-1 ${formData.address.length >= 250 ? "text-red-500" : "text-gray-500"
                        }`}
                    >
                      {formData.address.length}/250
                    </p>
                  </div>

                  {/* Country */}
                  {/* Country */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Country<span className="text-red-500">*</span>
                    </label>

                    <div className="relative">
                      <select
                        name="country"
                        autoComplete="off"
                        value={selectedCountryId}
                        onChange={(e) => {
                          const id = e.target.value;
                          setSelectedCountryId(id);
                          setFormData({ ...formData, country: e.target.selectedOptions[0].text });

                          setStates([]);
                          setCities([]);
                          setSelectedStateId("");

                          loadStates(id);
                        }}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-base text-black 
                 focus:ring-2 focus:ring-teal-600 outline-none bg-white appearance-none"
                      >
                        <option value="">Select Country</option>
                        {countries.map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.name}
                          </option>
                        ))}
                      </select>

                      {/* Arrow Icon */}
                      <svg
                        className="w-5 h-5 text-gray-600 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>


                  {/* State */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State<span className="text-red-500">*</span>
                    </label>

                    <div className="relative">
                      <select
                        name="state"
                        autoComplete="off"
                        value={selectedStateId}
                        onChange={(e) => {
                          const id = e.target.value;
                          setSelectedStateId(id);
                          setFormData({ ...formData, state: e.target.selectedOptions[0].text });

                          setCities([]);
                          loadCities(id);
                        }}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-base text-black 
                 focus:ring-2 focus:ring-teal-600 outline-none bg-white appearance-none"
                      >
                        <option value="">Select State</option>
                        {states.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.name}
                          </option>
                        ))}
                      </select>

                      {/* Arrow Icon */}
                      <svg
                        className="w-5 h-5 text-gray-600 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>


                  {/* City */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City<span className="text-red-500">*</span>
                    </label>

                    <div className="relative">
                      <select
                        name="city"
                        autoComplete="off"
                        value={formData.city_id}
                        onChange={(e) => {
                          const id = e.target.value;
                          const name = e.target.selectedOptions[0].text;
                          setFormData({ ...formData, city_id: id, city: name });
                        }}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-base text-black 
                 focus:ring-2 focus:ring-teal-600 outline-none bg-white appearance-none"
                        required
                      >
                        <option value="">Select City</option>
                        {cities.map((city) => (
                          <option key={city.id} value={city.id}>
                            {city.name}
                          </option>
                        ))}
                      </select>

                      {/* Arrow Icon */}
                      <svg
                        className="w-5 h-5 text-gray-600 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Pincode */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Postal Code<span className="text-red-500">*</span>
                    </label>

                    <input
                      type="text"
                      name="pincode"
                      placeholder="Enter Postal Code"
                      autoComplete="new-pincode"
                      autoCorrect="off"
                      spellCheck="false"
                      value={formData.pincode}
                      onInput={(e) => {
                        if (/^[0-9]*$/.test(e.target.value)) {
                          setFormData({ ...formData, pincode: e.target.value });
                        }
                      }}
                      maxLength={10}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 text-base text-black placeholder:text-gray-400 focus:ring-2 focus:ring-teal-600 outline-none"
                      required
                    />
                  </div>

                </div>




                {/* Proceed Button */}
                <button
                  onClick={handleProceedPayment}
                  disabled={isProcessing}
                  className="cursor-pointer w-full bg-gradient-to-b from-[#123050] to-[#1B497A] text-white font-bold text-lg py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50"
                >
                  {isProcessing ? "Processing..." : "Proceed to Payment"}
                </button>
              </div>
            </div>
          </div>


        )
      }

      {
        loading && (
          <div className="fixed inset-0 bg-black/50 flex flex-col items-center justify-center z-50">
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-white text-lg font-medium">Processing your payment...</p>
          </div>
        )
      }
    </div >
  );
}

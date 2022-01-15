function contact() {
  return (
    <div>
      <section class="text-gray-600 body-font relative">
        <div class="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.5625771180507!2d73.10013951485344!3d19.214298587008653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795919f9a5387%3A0x16159c1e33b487f1!2sGharda%20Circle%20%26%20Azde%20Gaon%20Rd%2C%20Azde%20Gaon%2C%20Sagarli%20Gaon%2C%20Dombivli%20East%2C%20Dombivli%2C%20Maharashtra%20421203!5e0!3m2!1sen!2sin!4v1642191142719!5m2!1sen!2sin"
            className="h-screen min-h-full"
          ></iframe>
        </div>
        <div class="container px-5 py-24 mx-auto flex">
          <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
              Contact Us
            </h2>
            <p class="leading-relaxed mb-5 text-gray-600">
              Feel free to drop us a message
            </p>
            <div class="relative mb-2">
              <div className="font-bold">Name</div>
              Runner's Clan Foundation
            </div>
            <hr />
            <div class="relative mt-2 mb-2">
              <div className="font-bold">Email</div>
              runnersclan2020@gmail.com
            </div>
            <hr />
            <div class="relative mt-2 mb-2">
              <div className="font-bold">Contact Number</div>
              +917066557013
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default contact;

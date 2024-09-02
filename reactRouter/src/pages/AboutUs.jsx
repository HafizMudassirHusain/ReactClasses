function AboutUs() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-5">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-600 leading-relaxed text-center mb-10">
          Welcome to our company! We are dedicated to providing the best services and products
          to our customers. Our team is made up of passionate professionals who are committed
          to excellence. We value innovation, integrity, and customer satisfaction.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-medium text-gray-800">John Doe</h2>
            <p className="text-gray-600">CEO & Founder</p>
            <p className="mt-4 text-gray-500">
              John has over 20 years of experience in the industry and leads the company with
              vision and dedication.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-medium text-gray-800">Jane Smith</h2>
            <p className="text-gray-600">Chief Operating Officer</p>
            <p className="mt-4 text-gray-500">
              Jane ensures smooth operations and brings a wealth of knowledge in managing
              large teams and complex projects.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-medium text-gray-800">Mark Johnson</h2>
            <p className="text-gray-600">Chief Technology Officer</p>
            <p className="mt-4 text-gray-500">
              Mark is the tech genius behind our cutting-edge solutions. His innovative
              approach drives our technology strategy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

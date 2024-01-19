"use client";
const Footer = () => {
  return (
    <div className="h-40 bg-blue-600 mt-5 text-white">
      <div className="flex p-5 justify-around">
        <div className="text-center flex flex-col justify-center">
          <h1>Welcome to work manager</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
        </div>
        <div className="text-center">
          <h1>Important links</h1>
          <ul>
            <li>
              <a href="">FaceBook</a>
            </li>
            <li>
              <a href="">YouTube</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

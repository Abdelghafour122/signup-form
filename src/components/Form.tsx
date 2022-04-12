import React from "react";

const Form = () => {
  return (
    <section className="form-container">
      <form action="">
        <input type="text" name="" id="" placeholder="First Name" />
        <input type="text" name="" id="" placeholder="Last Name " />

        <input type="email" name="" id="" placeholder="Email Address" />
        <input type="password" name="" id="" placeholder="Password" />
        <input type="submit" value="claim your free trial" />
      </form>
      <p>
        By clicking the button, you are agreeing to our{" "}
        <span>Terms and Services</span>{" "}
      </p>
    </section>
  );
};

export default Form;

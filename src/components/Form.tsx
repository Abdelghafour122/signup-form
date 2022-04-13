import React, { useState, useEffect, useRef } from "react";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const Form: React.FC = () => {
  const userRef = useRef<HTMLInputElement>(null);

  const [firstName, setFirstName] = useState("");
  const [validFirstName, setValidFirstName] = useState(false);

  const [lastName, setLastName] = useState("");
  const [validLastName, setValidLastName] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [password, setPassWord] = useState("");
  const [validPassword, setValidPassword] = useState(false);

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setValidFirstName(USER_REGEX.test(firstName));
  }, [firstName]);

  useEffect(() => {
    setValidLastName(USER_REGEX.test(lastName));
  }, [lastName]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
  }, [password]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    (!validFirstName || !validLastName || !validEmail || !validPassword) &&
      console.error("invalid entry");
  };

  return (
    <section className="form-container">
      <form action="" onSubmit={handleSubmit}>
        <input
          className={validFirstName ? "valid" : "invalid"}
          ref={userRef}
          type="text"
          value={firstName}
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          className={validLastName ? "valid" : "invalid"}
          type="text"
          value={lastName}
          placeholder="Last Name "
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          className={validEmail ? "valid" : "invalid"}
          type="email"
          value={email}
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className={validPassword ? "valid" : "invalid"}
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassWord(e.target.value)}
          required
        />
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

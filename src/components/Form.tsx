import React, { useState, useEffect, useRef } from "react";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const Form: React.FC = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const errorRef = useRef<HTMLInputElement>(null);

  const [firstName, setFirstName] = useState("");
  const [validFirstName, setValidFirstName] = useState(false);
  const [firstNameFocus, setFirstNameFocus] = useState(false);

  const [lastName, setLastName] = useState("");
  const [validLastName, setValidLastName] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

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
      <form onSubmit={handleSubmit}>
        <input
          className={validFirstName ? "valid" : "invalid"}
          ref={userRef}
          type="text"
          value={firstName}
          placeholder="First Name"
          autoComplete="off"
          onChange={(e) => setFirstName(e.target.value)}
          onFocus={() => setFirstNameFocus(!firstNameFocus)}
          onBlur={() => setFirstNameFocus(!firstNameFocus)}
          required
          aria-describedby="first-name"
          aria-invalid={validFirstName ? "false" : "true"}
        />
        <p
          id="first-name"
          className={!validFirstName && firstNameFocus ? "there" : "not-there"}
        >
          {!validFirstName ? "Invalid First name" : "all good"}
        </p>
        <input
          className={validLastName ? "valid" : "invalid"}
          type="text"
          value={lastName}
          placeholder="Last Name"
          autoComplete="off"
          onChange={(e) => setLastName(e.target.value)}
          onFocus={() => setLastNameFocus(!lastNameFocus)}
          onBlur={() => setLastNameFocus(!lastNameFocus)}
          required
          aria-describedby="last-name"
          aria-invalid={validLastName ? "false" : "true"}
        />
        <p
          id="last-name"
          className={!validLastName && lastNameFocus ? "there" : "not-there"}
        >
          {!validLastName ? "Invalid Last name" : "all good"}
        </p>
        <input
          className={validEmail ? "valid" : "invalid"}
          type="email"
          value={email}
          placeholder="Email Address"
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setEmailFocus(!emailFocus)}
          onBlur={() => setEmailFocus(!emailFocus)}
          required
          aria-invalid={validEmail ? "false" : "true"}
        />
        <input
          className={validPassword ? "valid" : "invalid"}
          type="password"
          value={password}
          placeholder="Password"
          autoComplete="off"
          onChange={(e) => setPassWord(e.target.value)}
          required
          aria-invalid={validPassword ? "false" : "true"}
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

import React, { useState, useEffect, useRef } from "react";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const Form: React.FC = () => {
  const userRef = useRef<HTMLInputElement>(null);

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
  const [passwordFocus, setPasswordFocus] = useState(false);

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

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassWord("");
  };

  return (
    <section className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          className={
            firstNameFocus
              ? validFirstName && firstName
                ? "valid"
                : "invalid"
              : "normal"
          }
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
          className={
            !validFirstName && firstName && firstNameFocus
              ? "there"
              : "not-there"
          }
        >
          {!validFirstName ? "Invalid First name" : "all good"}
        </p>
        <input
          className={
            lastNameFocus
              ? validLastName && lastName
                ? "valid"
                : "invalid"
              : "normal"
          }
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
          className={
            !validLastName && lastName && lastNameFocus ? "there" : "not-there"
          }
        >
          {!validLastName ? "Invalid Last name" : "all good"}
        </p>
        <input
          className={
            emailFocus ? (validEmail && email ? "valid" : "invalid") : "normal"
          }
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
        <p
          id="email"
          className={!validEmail && email && emailFocus ? "there" : "not-there"}
        >
          {!validEmail ? "Invalid Email" : "all good"}
        </p>
        <input
          // className={validPassword ? "valid" : "invalid"}
          className={
            passwordFocus
              ? validPassword && password
                ? "valid"
                : "invalid"
              : "normal"
          }
          type="password"
          value={password}
          placeholder="Password"
          autoComplete="off"
          onChange={(e) => setPassWord(e.target.value)}
          onFocus={() => setPasswordFocus(!passwordFocus)}
          onBlur={() => setPasswordFocus(!passwordFocus)}
          required
          aria-invalid={validPassword ? "false" : "true"}
        />
        <p
          id="password"
          className={
            !validPassword && password && passwordFocus ? "there" : "not-there"
          }
        >
          {!validPassword ? "Invalid Password" : "all good"}
        </p>
        <input
          type="submit"
          value="claim your free trial"
          disabled={
            validFirstName && validLastName && validEmail && validPassword
              ? false
              : true
          }
        />
      </form>
      <p>
        By clicking the button, you are agreeing to our{" "}
        <span>Terms and Services</span>{" "}
      </p>
    </section>
  );
};

export default Form;

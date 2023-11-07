import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitStr, setSubmitStr] = useState("");
console.log(submitStr)
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
      e.preventDefault()

    const str = `name: ${name} , email: ${email}`

    setSubmitStr(str);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" value={name} onChange={handleName} />
        <br />
        <label htmlFor="email">Email</label>
        <input type="email" value={email} onChange={handleEmail} />

        <input type="submit" value="Submit" />
      </form>
      <h1>{submitStr}</h1>
    </>
  );
}

export default Form;

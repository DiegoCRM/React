import MyComponent from "./MyComponent";

const TemplateExpressions = () => {
  const name = "Diego";

  const data = {
    age: 31,
    job: "Programador",
  };

  return (
    <div>
      <h1>Olá {name}, tudo bem?</h1>
      <p>Você atua como: {data.job}</p>
      <MyComponent/>
    </div>
  );
};

export default TemplateExpressions;

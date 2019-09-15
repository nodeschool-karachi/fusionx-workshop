import Mock from "mockjs";

export const getMessage = () => {
  let title = Mock.Random.name();
  let initials = title.match(/\b\w/g) || [];
  let name = ((initials.shift() || "") + (initials.pop() || "")).toUpperCase();

  let template = {
    name: title,
    image: Mock.Random.image(
      "200x100",
      Mock.Random.color(),
      "#FFF",
      "png",
      name
    ),
    message: Mock.Random.sentence(5)
  };
  return template;
};

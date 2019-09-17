// import Mock from 'mockjs';

// If you are not running api then you can easily fetch the data by simply uncommenting this function.
// export const getMessage = () => {
//   let title = Mock.Random.name();
//   let initials = title.match(/\b\w/g) || [];
//   let name = ((initials.shift() || "") + (initials.pop() || "")).toUpperCase();

//   let template = {
//     name: title,
//     image: Mock.Random.image(
//       "200x100",
//       Mock.Random.color(),
//       "#FFF",
//       "png",
//       name
//     ),
//     message: Mock.Random.sentence(5)
//   };
//   return template;
// };

export const getMessage = () =>
  fetch('http://localhost:5000/random')
    .then(res => res.json())
    .then(
      result => result,
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      // For the workshop I am just logging the error.
      error => {
        console.log(error);
      },
    );

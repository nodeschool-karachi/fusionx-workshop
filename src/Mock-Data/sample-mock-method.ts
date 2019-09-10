import * as Mock from 'mockjs';

export const getData = () => {
  const title = Mock.Random.name();
  const initials = title.match(/\b\w/g) || [];
  const name = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();

  const template = [
    {
      id: Mock.Random.increment(),
      name: Mock.Random.name(),
      image: Mock.Random.image('300x200', Mock.Random.color(), '#FFF', 'png', name),
      message: Mock.Random.sentence(10),
    },
    {
      id: Mock.Random.increment(1),
      name: Mock.Random.name(),
      image: Mock.Random.image('300x200', Mock.Random.color(), '#FFF', 'png', name),
      message: Mock.Random.sentence(10),
    },
    {
      id: Mock.Random.increment(1),
      name: Mock.Random.name(),
      image: Mock.Random.image('300x200', Mock.Random.color(), '#FFF', 'png', name),
      message: Mock.Random.sentence(10),
    },
    {
      id: Mock.Random.increment(1),
      name: Mock.Random.name(),
      image: Mock.Random.image('300x200', Mock.Random.color(), '#FFF', 'png', name),
      message: Mock.Random.sentence(10),
    },
    {
      id: Mock.Random.increment(1),
      name: Mock.Random.name(),
      image: Mock.Random.image('300x200', Mock.Random.color(), '#FFF', 'png', name),
      message: Mock.Random.sentence(10),
    },
    {
      id: Mock.Random.increment(1),
      name: Mock.Random.name(),
      image: Mock.Random.image('300x200', Mock.Random.color(), '#FFF', 'png', name),
      message: Mock.Random.sentence(10),
    },
    {
      id: Mock.Random.increment(1),
      name: Mock.Random.name(),
      image: Mock.Random.image('300x200', Mock.Random.color(), '#FFF', 'png', name),
      message: Mock.Random.sentence(10),
    },
  ];

  return template;
};

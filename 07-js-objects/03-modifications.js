import _ from 'lodash';

const normalize = (lesson) => {
  lesson.name = _.capitalize(lesson.name);
  lesson.description = lesson.description.toLowerCase();
};

// export default normalize;

const lesson1 = { name: 'intro', description: 'about Something' };
const lesson2 = { name: '', description: 'Some Description' };

normalize(lesson1);  //{ name: 'Intro', description: 'about something' }
normalize(lesson2);  //{ name: '', description: 'some description' }


const userInfo = {
    firstName: 'Alex',
    lastName: 'Petrov',
    age: 25,
    address: '20, 1st street, New York',
    tel: 10876453221,
    email: 'petrovtest@rmail.com'
};

const entries = Object.entries(userInfo);
entries.forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
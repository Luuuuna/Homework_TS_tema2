class Resource {
    constructor(data) {
        this.data = data;
    }
    get() {
        return this.data;
    }
    getOne(key, value) {
        return this.data.find((item) => item[key] === value);
    }
    add(newObj) {
        this.data.push(newObj);
        return this.data;
    }
    update(key, value, partialData) {
        const index = this.data.findIndex((item) => item[key] === value);
        if (index !== -1) {
            this.data[index] = Object.assign(Object.assign({}, this.data[index]), partialData);
            return this.data[index];
        }
        return undefined;
    }
    delete(key, value) {
        const index = this.data.findIndex((item) => item[key] === value);
        if (index !== -1) {
            const deletedItem = this.data.splice(index, 1)[0];
            return deletedItem;
        }
        return undefined;
    }
}
class UserModel extends Resource {
}
class OrderModel extends Resource {
}
const users = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Bob", age: 35 }
];
const orders = [
    { id: 1, userId: 1, product: "Book", quantity: 2 },
    { id: 2, userId: 2, product: "Phone", quantity: 1 },
    { id: 3, userId: 3, product: "TV", quantity: 1 }
];
const userModel = new UserModel(users);
const orderModel = new OrderModel(orders);
console.log(userModel.get());
console.log(orderModel.get());
console.log(userModel.getOne('id', 2));
console.log(orderModel.getOne('product', 'Phone'));
console.log(userModel.add({ id: 4, name: 'Alice', age: 40 }));
console.log(orderModel.add({ id: 4, userId: 1, product: 'Headphones', quantity: 1 }));
console.log(userModel.update('id', 2, { age: 31 }));
console.log(orderModel.update('userId', 3, { product: 'Laptop' }));
console.log(userModel.delete('id', 1));
console.log(orderModel.delete('id', 2));
//# sourceMappingURL=index.js.map
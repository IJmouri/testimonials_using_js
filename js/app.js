//immediate invoked function
(function () {
    let customers = [];
    let index = 0;
    //object constructor function
    function Customer(name, img, text) {
        this.name = name;
        this.img = img;
        this.text = text;
    }
    //create customer function
    function createCustomer(name, img, text) {
        //full img
        let fullImg = `img/customer-${img}.jpg`;
        const customer = new Customer(name, fullImg, text);
        //add to all customers array
        customers.push(customer);
    }
    createCustomer('john', 1, 'hello john');
    createCustomer('bob', 2, 'hello bob');
    createCustomer('michel', 3, 'hello michel');
    createCustomer('jonny', 4, 'hello jonny');
    // console.log(customers);
    document.querySelectorAll('.btn').forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            // console.log(event.target);
            if (event.target.parentElement.classList.contains('prevBtn')) {

                if (index === 0) {
                    index = customers.length;
                }
                index--;
                document.getElementById('customer-img').src = customers[index].img;
                document.getElementById('customer-name').textContent = customers[index].name;
                document.getElementById('customer-text').textContent = customers[index].text;
            }
            else if (event.target.parentElement.classList.contains('nextBtn')) {
                if (index === customers.length - 1) {
                    index = -1;
                }
                index++;
                document.getElementById('customer-img').src = customers[index].img;
                document.getElementById('customer-name').textContent = customers[index].name;
                document.getElementById('customer-text').textContent = customers[index].text;

            }
        })
    })
})();
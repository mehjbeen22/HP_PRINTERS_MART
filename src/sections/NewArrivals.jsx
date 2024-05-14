import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const NewArrivals = () => {
  return (
    <main className="p-4 my-10">
      <div>
        <section className="flex justify-between">
          <div>
            <p className="text-gray-500 text-xl font-bold">
              check out latest Products
            </p>
            <p className="text-5xl font-bold my-3">New Arrivals</p>
          </div>
          <div className="flex justify-center items-center mr-5">
            <button className="border-2 border-gray-500 p-2"> View All</button>
          </div>
        </section>

        <section className="grid grid-cols-4">
          {newArrivalsProducts.map(
            ({ id, imageUrl, productName, price, priviousPrice, type }) => {
              return (
                <Card style={{ width: '18rem' }} key={id}>
                  <Card.Img
                    variant="top"
                    src={imageUrl}
                    className="rounded-lg h-[15rem]"
                  />
                  <Card.Body className="border-t-4 border-black rounded-lg ">
                    <Card.Title>{productName}</Card.Title>
                    <Card.Text>
                      <span className="text-blue-600 text-xl mr-3">
                        {price}
                      </span>
                      <span className="text-red-600 line-through">
                        {priviousPrice}
                      </span>
                      <p className="text-gray-600 font-bold">{type}</p>
                    </Card.Text>

                    <Button
                      variant="primary"
                      className="bg-red-500 border-0 rounded-none"
                    >
                      ADD TO CART
                    </Button>
                  </Card.Body>
                </Card>
              );
            },
          )}
        </section>
      </div>
    </main>
  );
};

export default NewArrivals;

const newArrivalsProducts = [
  {
    id: 1,
    imageUrl: 'https://printexpress123.com/wp-content/uploads/2024/05/m2.jpg',
    productName: 'HP Ink Tank 516 Color Printer',
    price: '$390.00',
    priviousPrice: '$365.00',
    type: 'PRINTERS',
  },
  {
    id: 2,
    imageUrl: 'https://printexpress123.com/wp-content/uploads/2024/05/m6.jpg',
    productName: 'HP Ink Tank 419 wifi Printer',
    price: '$700.00',
    priviousPrice: '$$749.00',
    type: 'PRINTERS',
  },
  {
    id: 3,
    imageUrl: 'https://printexpress123.com/wp-content/uploads/2024/05/m2-1.jpg',
    productName: 'HP Ink Tank 516 Color Printer',
    price: '$400.00',
    priviousPrice: '$415.00',
    type: 'PRINTERS',
  },
  {
    id: 4,
    imageUrl: 'https://printexpress123.com/wp-content/uploads/2024/05/m7.jpg',
    productName: 'HP DeskJet 2332 Inkjet Printer',
    price: '$380.00',
    priviousPrice: '$415.00',
    type: 'PRINTERS',
  },
];
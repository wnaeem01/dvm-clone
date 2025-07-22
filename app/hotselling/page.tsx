'use client';

import Link from 'next/link';
import { getAllProducts } from "../api/products";
import { Row, Col, Card } from "antd";

const products = await getAllProducts();

const Page = () => {
  return (
    <div className="px-55">
      <h1 className="text-black text-4xl my-10">Shop by Categories</h1>
      <Row gutter={10}>
        {products &&
          products.map((item, index) => (
            <Col span={6} key={index}>
              <Link href={`/hotselling/${item.slug}`}>
                <Card hoverable style={{ cursor: 'pointer' }}>
                  <img src="assets/s4.webp" />
                  <h1 className="text-black">{item.name}</h1>
                </Card>
              </Link>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Page;

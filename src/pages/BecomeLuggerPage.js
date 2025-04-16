import React, { useState, useEffect } from 'react';
import { Row, Col, Typography, Input, Button, Radio, Card, Select } from 'antd';
import './BecomeLuggerPage.css'; // Create this CSS file next

const { Title, Paragraph } = Typography;
const { Option } = Select;

const BecomeLuggerPage = () => {
  // State for form inputs (add more as needed)
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [location, setLocation] = useState('');
  const [referral, setReferral] = useState('');
  const [provider, setProvider] = useState('');
  const [canLift, setCanLift] = useState(null);
  const [hasTruck, setHasTruck] = useState(null);
  const [canWorkWeekend, setCanWorkWeekend] = useState(null);

  useEffect(() => {
    document.title = "Haulino - Become a Lugg Mover";
  }, []);

  const handleGetStarted = () => {
    console.log('Form Data:', {
      name, phone, email, birthdate, location, referral, provider, canLift, hasTruck, canWorkWeekend
    });
    // Add form submission logic here
  };

  return (
    <div className="become-lugger-container">
      {/* Hero Section */}
      <Row justify="center" align="middle" className="become-lugger-hero" style={{ padding: '60px 20px', textAlign: 'center', background: '#f0f2f5' /* Placeholder background */ }}>
        <Col>
          <Title level={1}>Become a Lugg Mover</Title>
          <Paragraph style={{ fontSize: '1.2em' }}>
            Earn on your own schedule with your truck!
          </Paragraph>
          <Paragraph>
            Get paid same day, work when you want, and stay active!
          </Paragraph>
          <Button type="link">Don't own a truck?—Apply as a helper!</Button>
        </Col>
      </Row>

      {/* Application Form Section */}
      <Row justify="center" style={{ padding: '40px 20px' }}>
        <Col xs={24} md={16} lg={12}>
          <Title level={3} style={{ textAlign: 'center', marginBottom: '30px' }}>Apply Now</Title>
          <Input placeholder="Your name..." value={name} onChange={e => setName(e.target.value)} size="large" style={{ marginBottom: '15px' }} />
          <Input placeholder="Your phone..." value={phone} onChange={e => setPhone(e.target.value)} size="large" style={{ marginBottom: '15px' }} />
          <Input placeholder="Your email address..." type="email" value={email} onChange={e => setEmail(e.target.value)} size="large" style={{ marginBottom: '15px' }} />
          <Input placeholder="Your birthdate..." type="date" value={birthdate} onChange={e => setBirthdate(e.target.value)} size="large" style={{ marginBottom: '15px' }} />
          <Input placeholder="Where are you located?" value={location} onChange={e => setLocation(e.target.value)} size="large" style={{ marginBottom: '15px' }} />
          <Input placeholder="Referred by..." value={referral} onChange={e => setReferral(e.target.value)} size="large" style={{ marginBottom: '15px' }} />
          <Input placeholder="Your phone service provider..." value={provider} onChange={e => setProvider(e.target.value)} size="large" style={{ marginBottom: '25px' }} />

          <Paragraph>Can you lift up to 100 pounds by yourself?</Paragraph>
          <Radio.Group onChange={e => setCanLift(e.target.value)} value={canLift} style={{ marginBottom: '25px' }}>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>

          <Paragraph>Do you own a truck and want to use it with us?</Paragraph>
          <Radio.Group onChange={e => setHasTruck(e.target.value)} value={hasTruck} style={{ marginBottom: '25px' }}>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>

          <Paragraph>Can you work this weekend?</Paragraph>
          <Radio.Group onChange={e => setCanWorkWeekend(e.target.value)} value={canWorkWeekend} style={{ marginBottom: '30px' }}>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>

          <Button type="primary" size="large" block onClick={handleGetStarted} style={{ background: '#FFA500', borderColor: '#FFA500' }}>
            Get started
          </Button>
        </Col>
      </Row>

      {/* Earnings Section Placeholder */}
      <Row justify="center" style={{ padding: '40px 20px', background: '#f0f2f5', textAlign: 'center' }}>
        <Col span={24}>
          <Title level={2}>Potential Earnings</Title>
          {/* Placeholder for earnings visuals */}
          <Paragraph>Visuals for Helper, Van, Box, XL, Pickup earnings go here.</Paragraph>
          <div style={{ height: '150px', background: '#ddd', margin: '20px auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Earnings Placeholder</div>
        </Col>
      </Row>

      {/* Benefits Section */}
       <Row justify="center" gutter={[16, 16]} style={{ padding: '40px 20px', textAlign: 'center' }}>
         <Col xs={24} md={8}>
           <Card title="Earn money">
             <Paragraph>Earn money with your truck💸💸💸</Paragraph>
             {/* Placeholder image */}
             <div style={{ height: '100px', background: '#eee' }}></div>
           </Card>
         </Col>
         <Col xs={24} md={8}>
           <Card title="Make people happy">
             <Paragraph>Happy customer🥰🤩😍</Paragraph>
             {/* Placeholder image */}
             <div style={{ height: '100px', background: '#eee' }}></div>
           </Card>
         </Col>
         <Col xs={24} md={8}>
           <Card title="Work when you want">
             {/* Placeholder image */}
             <div style={{ height: '100px', background: '#eee' }}></div>
           </Card>
         </Col>
       </Row>

      {/* What You'll Move Section */}
      <Row justify="center" style={{ padding: '40px 20px', background: '#f0f2f5', textAlign: 'center' }}>
        <Col span={24} style={{ marginBottom: '20px' }}>
          <Title level={2}>What you'll be moving</Title>
        </Col>
        <Row gutter={[16, 16]} justify="center">
          {[
            { title: 'Store deliveries', desc: "You’ll pick up furniture and other items from stores and deliver them to the customer's room of choice.", icon: 'price-tag' },
            { title: 'Small Moves', desc: 'Help customers move in and out of apartments, homes, dorms, offices, and storage units.', icon: 'small-move' },
            { title: 'Donations & Junk', desc: 'Pick up donations and take them to places like Goodwill, or pick up items and bring them to the dump.', icon: 'junk' },
            { title: 'Craigslist Purchases', desc: 'Pick up and deliver items bought or sold on Craigslist, Facebook Marketplace, and similar sites.', icon: 'handshake' }
          ].map(item => (
            <Col key={item.title} xs={24} sm={12} md={6}>
              <Card>
                {/* Placeholder for icon */}
                <div style={{ fontSize: '2em', marginBottom: '10px' }}>{item.icon}</div>
                <Title level={4}>{item.title}</Title>
                <Paragraph>{item.desc}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
         {/* Reusing Occasions List */}
         <Row gutter={[16, 16]} justify="center" style={{ marginTop: '30px' }}>
           {[
             'Home moving', 'Apartment moving', 'College moving', 'Storage moving', 'Office moving',
             'Furniture delivery', 'FB Marketplace delivery', 'Craigslist delivery', 'Appliance delivery',
             'Junk removal', 'Donation pick up', 'Labor only'
           ].map(occasion => (
             <Col key={occasion} xs={12} sm={8} md={6} lg={4}>
               <Card size="small" hoverable>
                 <Paragraph>{occasion}</Paragraph>
               </Card>
             </Col>
           ))}
         </Row>
      </Row>

      {/* Qualifications Section */}
      <Row justify="center" style={{ padding: '40px 20px', textAlign: 'center' }}>
        <Col span={24} style={{ marginBottom: '20px' }}>
          <Title level={2}>Who qualifies</Title>
        </Col>
        <Row gutter={[16, 16]} justify="center">
          {[
            { title: 'Recent smartphone', desc: 'Being very familiar with your iPhone or Android is key to this role.' },
            { title: 'At least 18 years old', desc: 'You must be at least 18 years or older to be a Lugger.' },
            { title: 'Strong & physically able', desc: 'You must be strong and physically able to lift over 100 lbs.' },
            { title: 'Great communication', desc: 'You must be good with people and have strong communication skills.' }
          ].map(qual => (
            <Col key={qual.title} xs={24} sm={12} md={6}>
              <Card>
                 {/* Placeholder for icon */}
                 <div style={{ fontSize: '2em', marginBottom: '10px' }}>✅</div>
                <Title level={4}>{qual.title}</Title>
                <Paragraph>{qual.desc}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </Row>

      {/* FAQ Section (Similar to HomePage) */}
       <Row justify="center" style={{ padding: '40px 20px', background: '#f0f2f5', textAlign: 'center' }}>
         <Col span={24} style={{ marginBottom: '20px' }}>
           <Title level={2}>Frequently asked questions</Title>
         </Col>
         <Col xs={24} md={16} style={{ textAlign: 'left' }}>
           {[
             'What is Lugg?',
             'What will I be doing as a Lugg mover?',
             "I don't own a truck or van. Can I still become a Lugg Mover?",
             'What is the difference between a Lugg Driver and a Lugg Helper?',
             'What is the average hourly earnings for Lugg movers?',
             'How often will I get paid?',
             'Can I receive tips from customers?',
             'Can I choose my schedule?',
             'What are the requirements for becoming a Lugg Mover?',
             'How long does the sign-up process take?',
           ].map(faq => (
             <Paragraph key={faq}>
               <a href="#">{faq}</a> {/* Placeholder link */}
             </Paragraph>
           ))}
         </Col>
       </Row>

       {/* Final CTA Section */}
       <Row justify="center" style={{ padding: '40px 20px', textAlign: 'center' }}>
         <Col span={24}>
           <Title level={2}>Become a Lugg mover</Title>
           <Paragraph>Earn money with your truck or smart phone</Paragraph>
           <Button type="primary" size="large" style={{ background: '#FFA500', borderColor: '#FFA500' }}>Sign up now</Button>
           <Button type="link">Make money as a mover</Button>
         </Col>
       </Row>

       {/* Cities Section */}
       <Row justify="center" style={{ padding: '40px 20px', background: '#f0f2f5', textAlign: 'center' }}>
         <Col span={24} style={{ marginBottom: '20px' }}>
           <Title level={2}>Earn in these cities</Title>
         </Col>
         <Col xs={24} md={18}>
           <Row gutter={[8, 8]} justify="center">
             {[
                'Alexandria, VA', 'Annapolis, MD', 'Atlanta, GA', 'Austin, TX', 'Baltimore, MD', 'Boston, MA',
                'Boulder, CO', 'Brooklyn, NY', 'Chicago, IL', 'Dallas, TX', 'Denver, CO', 'Fort Collins, CO',
                'Fort Lauderdale, FL', 'Fort Worth, TX', 'Hartford, CT', 'Houston, TX', 'Jersey City, NJ',
                'Los Angeles, CA', 'Miami, FL', 'Nashua, NH', 'New Haven, CT', 'New York City, NY', 'Newark, NJ',
                'Oakland, CA', 'Olympia, WA', 'Orange County, CA', 'Philadelphia, PA', 'Phoenix, AZ', 'Portland, OR',
                'Providence, RI', 'Sacramento, CA', 'Salt Lake City, UT', 'San Antonio, TX', 'San Diego, CA',
                'San Francisco, CA', 'San Jose, CA', 'Santa Cruz, CA', 'Santa Rosa, CA', 'Seattle, WA', 'Tacoma, WA',
                'Trenton, NJ', 'Vancouver, WA', 'Washington, D.C.', 'West Palm Beach, FL', 'Wilmington, DE', 'Worcester, MA'
             ].map(city => (
               <Col key={city} xs={12} sm={8} md={6} lg={4}>
                 <a href="#">{city}</a> {/* Placeholder link */}
               </Col>
             ))}
           </Row>
           <Button type="link" style={{ marginTop: '20px' }}>View all cities</Button>
         </Col>
       </Row>

       {/* Keep in Touch Section (Reused from HomePage) */}
       <Row justify="center" style={{ padding: '40px 20px', textAlign: 'center' }}>
         <Col span={24} style={{ marginBottom: '10px' }}>
           <Title level={3}>Keep in touch</Title>
           <Paragraph>Sign up for email announcements, deals, and more!</Paragraph>
         </Col>
         <Col xs={24} sm={12} md={8}>
           <Input.Search
             placeholder="Email address..."
             enterButton="Subscribe"
             size="large"
             onSearch={value => console.log(value)} // Placeholder action
             style={{ background: '#FFA500', borderColor: '#FFA500' }} // Approximate styling
           />
         </Col>
       </Row>

    </div>
  );
};

export default BecomeLuggerPage;

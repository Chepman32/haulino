import React from "react";
import { Card, Row, Col, Typography } from "antd";
import "./CityList.css";

const { Title } = Typography;

// Data for the 100 largest US cities with landscape-oriented photos
export const largestUsCities = [
  // Top 30 cities with landscape images
  {
    id: 1,
    name: "New York City",
    state: "NY",
    imageUrl:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Los Angeles",
    state: "CA",
    imageUrl:
      "https://images.unsplash.com/photo-1503891450248-fe52f487bf45?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Chicago",
    state: "IL",
    imageUrl:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Houston",
    state: "TX",
    imageUrl:
      "https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Phoenix",
    state: "AZ",
    imageUrl:
      "https://images.unsplash.com/photo-1572319807499-5c731bf25114?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Philadelphia",
    state: "PA",
    imageUrl:
      "https://images.pexels.com/photos/1239162/pexels-photo-1239162.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 7,
    name: "San Antonio",
    state: "TX",
    imageUrl:
      "https://images.pexels.com/photos/3582117/pexels-photo-3582117.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 8,
    name: "San Diego",
    state: "CA",
    imageUrl:
      "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 9,
    name: "Dallas",
    state: "TX",
    imageUrl:
      "https://images.pexels.com/photos/45182/dallas-skyline-texas-city-45182.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 10,
    name: "San Jose",
    state: "CA",
    imageUrl:
      "https://images.pexels.com/photos/3694341/pexels-photo-3694341.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 11,
    name: "Austin",
    state: "TX",
    imageUrl:
      "https://images.pexels.com/photos/5244766/pexels-photo-5244766.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 12,
    name: "Jacksonville",
    state: "FL",
    imageUrl:
      "https://images.pexels.com/photos/3722770/pexels-photo-3722770.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 13,
    name: "Fort Worth",
    state: "TX",
    imageUrl:
      "https://images.pexels.com/photos/3879071/pexels-photo-3879071.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 14,
    name: "Columbus",
    state: "OH",
    imageUrl:
      "https://images.pexels.com/photos/3889852/pexels-photo-3889852.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 15,
    name: "Charlotte",
    state: "NC",
    imageUrl:
      "https://images.pexels.com/photos/3763164/pexels-photo-3763164.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 16,
    name: "San Francisco",
    state: "CA",
    imageUrl:
      "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 17,
    name: "Indianapolis",
    state: "IN",
    imageUrl:
      "https://images.pexels.com/photos/2129796/pexels-photo-2129796.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 18,
    name: "Seattle",
    state: "WA",
    imageUrl:
      "https://images.pexels.com/photos/2157861/pexels-photo-2157861.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 19,
    name: "Denver",
    state: "CO",
    imageUrl:
      "https://images.pexels.com/photos/3751007/pexels-photo-3751007.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 20,
    name: "Washington",
    state: "D.C.",
    imageUrl:
      "https://images.pexels.com/photos/129112/pexels-photo-129112.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 21,
    name: "Boston",
    state: "MA",
    imageUrl:
      "https://images.pexels.com/photos/2119028/pexels-photo-2119028.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 22,
    name: "El Paso",
    state: "TX",
    imageUrl:
      "https://images.pexels.com/photos/3947515/pexels-photo-3947515.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 23,
    name: "Nashville",
    state: "TN",
    imageUrl:
      "https://images.pexels.com/photos/3756345/pexels-photo-3756345.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 24,
    name: "Detroit",
    state: "MI",
    imageUrl:
      "https://images.pexels.com/photos/3779814/pexels-photo-3779814.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 25,
    name: "Oklahoma City",
    state: "OK",
    imageUrl:
      "https://images.pexels.com/photos/3968141/pexels-photo-3968141.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 26,
    name: "Portland",
    state: "OR",
    imageUrl:
      "https://images.pexels.com/photos/3893398/pexels-photo-3893398.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 27,
    name: "Las Vegas",
    state: "NV",
    imageUrl:
      "https://images.pexels.com/photos/2837909/pexels-photo-2837909.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 28,
    name: "Memphis",
    state: "TN",
    imageUrl:
      "https://images.pexels.com/photos/3908857/pexels-photo-3908857.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 29,
    name: "Louisville",
    state: "KY",
    imageUrl:
      "https://images.pexels.com/photos/3889864/pexels-photo-3889864.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 30,
    name: "Baltimore",
    state: "MD",
    imageUrl:
      "https://images.pexels.com/photos/3889739/pexels-photo-3889739.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

  // Cities 31-100 with landscape images
  {
    id: 31,
    name: "Milwaukee",
    state: "WI",
    imageUrl:
      "https://images.pexels.com/photos/3873973/pexels-photo-3873973.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 32,
    name: "Albuquerque",
    state: "NM",
    imageUrl:
      "https://images.pexels.com/photos/3889893/pexels-photo-3889893.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 33,
    name: "Tucson",
    state: "AZ",
    imageUrl:
      "https://images.pexels.com/photos/1486648/pexels-photo-1486648.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 34,
    name: "Fresno",
    state: "CA",
    imageUrl:
      "https://images.pexels.com/photos/4003433/pexels-photo-4003433.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 35,
    name: "Sacramento",
    state: "CA",
    imageUrl:
      "https://images.pexels.com/photos/3643714/pexels-photo-3643714.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 36,
    name: "Long Beach",
    state: "CA",
    imageUrl:
      "https://images.pexels.com/photos/6794942/pexels-photo-6794942.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 37,
    name: "Kansas City",
    state: "MO",
    imageUrl:
      "https://images.pexels.com/photos/3221165/pexels-photo-3221165.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 38,
    name: "Mesa",
    state: "AZ",
    imageUrl:
      "https://images.pexels.com/photos/5472528/pexels-photo-5472528.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 39,
    name: "Atlanta",
    state: "GA",
    imageUrl:
      "https://images.pexels.com/photos/1983028/pexels-photo-1983028.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 40,
    name: "Colorado Springs",
    state: "CO",
    imageUrl:
      "https://images.pexels.com/photos/2698888/pexels-photo-2698888.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 41,
    name: "Raleigh",
    state: "NC",
    imageUrl:
      "https://images.pexels.com/photos/3747466/pexels-photo-3747466.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 42,
    name: "Omaha",
    state: "NE",
    imageUrl:
      "https://images.pexels.com/photos/3731452/pexels-photo-3731452.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 43,
    name: "Miami",
    state: "FL",
    imageUrl:
      "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 44,
    name: "Oakland",
    state: "CA",
    imageUrl:
      "https://images.pexels.com/photos/5345029/pexels-photo-5345029.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 45,
    name: "Minneapolis",
    state: "MN",
    imageUrl:
      "https://images.pexels.com/photos/3639696/pexels-photo-3639696.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 46,
    name: "Tulsa",
    state: "OK",
    imageUrl:
      "https://images.pexels.com/photos/3779820/pexels-photo-3779820.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 47,
    name: "Cleveland",
    state: "OH",
    imageUrl:
      "https://images.pexels.com/photos/2568456/pexels-photo-2568456.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 48,
    name: "Wichita",
    state: "KS",
    imageUrl:
      "https://images.pexels.com/photos/4198566/pexels-photo-4198566.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 49,
    name: "Arlington",
    state: "TX",
    imageUrl:
      "https://images.pexels.com/photos/4198028/pexels-photo-4198028.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 50,
    name: "New Orleans",
    state: "LA",
    imageUrl:
      "https://images.pexels.com/photos/3253998/pexels-photo-3253998.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 51,
    name: "Bakersfield",
    state: "CA",
    imageUrl:
      "https://images.pexels.com/photos/4210037/pexels-photo-4210037.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 52,
    name: "Tampa",
    state: "FL",
    imageUrl:
      "https://images.pexels.com/photos/2845013/pexels-photo-2845013.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 53,
    name: "Honolulu",
    state: "HI",
    imageUrl:
      "https://images.pexels.com/photos/2563733/pexels-photo-2563733.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 54,
    name: "Aurora",
    state: "CO",
    imageUrl:
      "https://images.pexels.com/photos/2517931/pexels-photo-2517931.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 55,
    name: "Anaheim",
    state: "CA",
    imageUrl:
      "https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 56,
    name: "Santa Ana",
    state: "CA",
    imageUrl:
      "https://images.pexels.com/photos/4587959/pexels-photo-4587959.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 57,
    name: "St. Louis",
    state: "MO",
    imageUrl:
      "https://images.pexels.com/photos/2445627/pexels-photo-2445627.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 58,
    name: "Riverside",
    state: "CA",
    imageUrl:
      "https://images.pexels.com/photos/4414827/pexels-photo-4414827.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 59,
    name: "Corpus Christi",
    state: "TX",
    imageUrl:
      "https://images.pexels.com/photos/3669288/pexels-photo-3669288.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 60,
    name: "Lexington",
    state: "KY",
    imageUrl:
      "https://images.pexels.com/photos/4571578/pexels-photo-4571578.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 61,
    name: "Pittsburgh",
    state: "PA",
    imageUrl:
      "https://images.pexels.com/photos/7060906/pexels-photo-7060906.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 62,
    name: "Anchorage",
    state: "AK",
    imageUrl:
      "https://images.pexels.com/photos/3933881/pexels-photo-3933881.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 63,
    name: "Stockton",
    state: "CA",
    imageUrl:
      "https://images.pexels.com/photos/4571579/pexels-photo-4571579.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 64,
    name: "Cincinnati",
    state: "OH",
    imageUrl:
      "https://images.pexels.com/photos/4552744/pexels-photo-4552744.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 65,
    name: "St. Paul",
    state: "MN",
    imageUrl:
      "https://images.pexels.com/photos/4571583/pexels-photo-4571583.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 66,
    name: "Toledo",
    state: "OH",
    imageUrl:
      "https://images.pexels.com/photos/4587985/pexels-photo-4587985.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 67,
    name: "Newark",
    state: "NJ",
    imageUrl:
      "https://images.pexels.com/photos/4587976/pexels-photo-4587976.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 68,
    name: "Greensboro",
    state: "NC",
    imageUrl:
      "https://images.pexels.com/photos/4587844/pexels-photo-4587844.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 69,
    name: "Plano",
    state: "TX",
    imageUrl:
      "https://images.pexels.com/photos/4587967/pexels-photo-4587967.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 70,
    name: "Henderson",
    state: "NV",
    imageUrl:
      "https://images.pexels.com/photos/4590394/pexels-photo-4590394.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 71,
    name: "Lincoln",
    state: "NE",
    imageUrl:
      "https://images.pexels.com/photos/4590441/pexels-photo-4590441.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 72,
    name: "Buffalo",
    state: "NY",
    imageUrl:
      "https://images.pexels.com/photos/6847054/pexels-photo-6847054.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 73,
    name: "Jersey City",
    state: "NJ",
    imageUrl:
      "https://images.pexels.com/photos/4590451/pexels-photo-4590451.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 74,
    name: "Chula Vista",
    state: "CA",
    imageUrl:
      "https://images.pexels.com/photos/4590461/pexels-photo-4590461.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 75,
    name: "Fort Wayne",
    state: "IN",
    imageUrl:
      "https://images.pexels.com/photos/4590469/pexels-photo-4590469.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 76,
    name: "Orlando",
    state: "FL",
    imageUrl:
      "https://images.pexels.com/photos/9172013/pexels-photo-9172013.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 77,
    name: "St. Petersburg",
    state: "FL",
    imageUrl:
      "https://images.pexels.com/photos/4590477/pexels-photo-4590477.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 78,
    name: "Chandler",
    state: "AZ",
    imageUrl:
      "https://images.pexels.com/photos/4590487/pexels-photo-4590487.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 79,
    name: "Laredo",
    state: "TX",
    imageUrl:
      "https://images.pexels.com/photos/4590494/pexels-photo-4590494.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 80,
    name: "Norfolk",
    state: "VA",
    imageUrl:
      "https://images.pexels.com/photos/4590502/pexels-photo-4590502.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 81,
    name: "Durham",
    state: "NC",
    imageUrl:
      "https://images.pexels.com/photos/4590507/pexels-photo-4590507.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 82,
    name: "Madison",
    state: "WI",
    imageUrl:
      "https://images.pexels.com/photos/3214995/pexels-photo-3214995.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 83,
    name: "Lubbock",
    state: "TX",
    imageUrl:
      "https://images.pexels.com/photos/4590512/pexels-photo-4590512.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 84,
    name: "Irvine",
    state: "CA",
    imageUrl:
      "https://images.pexels.com/photos/4590517/pexels-photo-4590517.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 85,
    name: "Winston-Salem",
    state: "NC",
    imageUrl:
      "https://images.pexels.com/photos/4590522/pexels-photo-4590522.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 86,
    name: "Glendale",
    state: "AZ",
    imageUrl:
      "https://images.pexels.com/photos/4590530/pexels-photo-4590530.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 87,
    name: "Garland",
    state: "TX",
    imageUrl:
      "https://images.pexels.com/photos/4590538/pexels-photo-4590538.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 88,
    name: "Hialeah",
    state: "FL",
    imageUrl:
      "https://images.pexels.com/photos/4590545/pexels-photo-4590545.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 89,
    name: "Reno",
    state: "NV",
    imageUrl:
      "https://images.pexels.com/photos/4590548/pexels-photo-4590548.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 90,
    name: "Chesapeake",
    state: "VA",
    imageUrl:
      "https://images.pexels.com/photos/4590553/pexels-photo-4590553.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 91,
    name: "Gilbert",
    state: "AZ",
    imageUrl:
      "https://images.pexels.com/photos/4590558/pexels-photo-4590558.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 92,
    name: "Baton Rouge",
    state: "LA",
    imageUrl:
      "https://images.pexels.com/photos/4590562/pexels-photo-4590562.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 93,
    name: "Irving",
    state: "TX",
    imageUrl:
      "https://images.pexels.com/photos/4590569/pexels-photo-4590569.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 94,
    name: "Scottsdale",
    state: "AZ",
    imageUrl:
      "https://images.pexels.com/photos/4590582/pexels-photo-4590582.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 95,
    name: "North Las Vegas",
    state: "NV",
    imageUrl:
      "https://images.pexels.com/photos/4590588/pexels-photo-4590588.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 96,
    name: "Fremont",
    state: "CA",
    imageUrl:
      "https://images.pexels.com/photos/4590598/pexels-photo-4590598.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 97,
    name: "Boise",
    state: "ID",
    imageUrl:
      "https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 98,
    name: "Richmond",
    state: "VA",
    imageUrl:
      "https://images.pexels.com/photos/4569049/pexels-photo-4569049.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 99,
    name: "San Bernardino",
    state: "CA",
    imageUrl:
      "https://images.pexels.com/photos/4590605/pexels-photo-4590605.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 100,
    name: "Birmingham",
    state: "AL",
    imageUrl:
      "https://images.pexels.com/photos/2263683/pexels-photo-2263683.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const CityList = () => {
  return (
    <div className="city-list-container">
      <Title level={2} style={{ marginBottom: "16px", textAlign: "center", width: "100%" }}>
        Explore Our Service Areas
      </Title>
      <Row gutter={[0, 8]}>
        {largestUsCities.map((city) => (
          <Col key={city.id} xs={24} sm={24} md={12} lg={8} xl={6}>
            <Card
              hoverable
              style={{
                width: "100%",
                margin: 0,
                boxSizing: "border-box"
              }}
              bodyStyle={{
                padding: "8px",
              }}
              cover={
                <img
                  alt={city.name}
                  src={city.imageUrl}
                  style={{
                    height: "180px",
                    objectFit: "cover",
                    width: "100%",
                    display: "block"
                  }}
                />
              }
            >
              <Card.Meta
                title={`${city.name}, ${city.state}`}
                style={{ textAlign: "center" }}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CityList;

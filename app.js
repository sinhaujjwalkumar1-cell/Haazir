// App.js
import React, { useState } from 'react';
import Lottie from 'lottie-react';
import welcomeAnim from './assets/welcome-lottie.json'; // Replace with line icon JSON
import homeServicesIcon from './assets/home-services.json';
// ... import all icon JSONs needed

const mainCategories = [
  { name: "Home Services", icon: homeServicesIcon, subs: ["Plumbing", "Cleaning", "Electrician"] },
  { name: "Construction", icon: homeServicesIcon, subs: ["Builder", "Mason", "Painter"] },
  { name: "Tech Support", icon: homeServicesIcon, subs: ["Laptop", "Mobile", "WiFi"] },
  { name: "Vehicle Repair", icon: homeServicesIcon, subs: ["Bike", "Car", "Truck"] },
  { name: "E-Rickshaw", icon: homeServicesIcon, subs: ["Rental", "Repair"] },
  { name: "Tuition", icon: homeServicesIcon, subs: ["Math", "Science", "English"] },
  { name: "Mehndi Artist", icon: homeServicesIcon, subs: ["Wedding", "Festival"] },
  { name: "Tank Cleaning", icon: homeServicesIcon, subs: ["Home Tank", "Commercial"] },
  // ... Extend as needed
];

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [visibleCount, setVisibleCount] = useState(7);
  const [expanded, setExpanded] = useState(null);
  const [selectedSubs, setSelectedSubs] = useState({});

  const showCategories = mainCategories.slice(0, visibleCount);
  const showMore = visibleCount < mainCategories.length;

  const handleCategoryClick = idx => {
    setExpanded(expanded === idx ? null : idx);
  };

  const handleCheck = (catIdx, sub) => {
    setSelectedSubs(prev => {
      const catKey = mainCategories[catIdx].name;
      const prevSet = prev[catKey] || [];
      let nextSet;
      if (prevSet.includes(sub)) {
        nextSet = prevSet.filter(s => s !== sub);
      } else {
        nextSet = [...prevSet, sub];
      }
      return { ...prev, [catKey]: nextSet };
    });
  };

  return (
    <div className="app-bg">
      {/* Logo section */}
      <header className="header-animated">
        <span>
          <Lottie animationData={welcomeAnim} style={{ height: 60 }} />
        </span>
        <h1 className="site-title-ani">Service by Local</h1>
      </header>
      {/* Welcome popup */}
      {showWelcome && (
        <div className="welcome-popup animatedIn">
          <h2>Welcome to Service by Local</h2>
          <div>सबसे तेज़, सबसे भरोसेमंद</div>
          <div>India's No.1 Service App</div>
          <div className="smallTag">Service Beyond Expectations</div>
          <button onClick={() => setShowWelcome(false)}>Start</button>
        </div>
      )}
      {/* Category grid */}
      <section className="cat-section">
        <h3>Popular Categories</h3>
        <div className="cat-grid">
          {showCategories.map((cat, idx) => (
            <React.Fragment key={cat.name}>
              <div
                className={`cat-card animatedCard ${expanded === idx ? "active" : ""}`}
                onClick={() => handleCategoryClick(idx)}
              >
                <Lottie animationData={cat.icon} loop />
                <div>{cat.name}</div>
              </div>
              {/* On click, show subcategory below full row (spanning all 4 columns) */}
              {expanded === idx && (
                <div className="subcat-row animatedExpand" style={{ gridColumn: '1/-1' }}>
                  {cat.subs.map(sub => (
                    <label key={sub} className="subcat-check">
                      <input
                        type="checkbox"
                        checked={(selectedSubs[cat.name] || []).includes(sub)}
                        onChange={e => handleCheck(idx, sub)}
                      />
                      <span>{sub}</span>
                    </label>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}
          {showMore && (
            <div className="cat-card cat-more animatedCard" onClick={() => setVisibleCount(c => Math.min(c + 7, mainCategories.length))}>
              <Lottie animationData={homeServicesIcon} loop />
              <div>View More</div>
            </div>
          )}
        </div>
      </section>
      {/* Keep Services Near You empty */}
    </div>
  );
}

export default App;

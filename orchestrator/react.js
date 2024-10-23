import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Components
const Home = () => <h1>Welcome to Music Learning App</h1>;
const Lessons = () => <h2>Music Lessons</h2>;
const Practice = () => <h2>Practice Sessions</h2>;
const Progress = () => <h2>Your Progress</h2>;

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulating user authentication
    setUser({ name: 'Music Learner' });
  }, []);

  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/lessons">Lessons</Link></li>
            <li><Link to="/practice">Practice</Link></li>
            <li><Link to="/progress">Progress</Link></li>
          </ul>
        </nav>

        {user && <p>Welcome, {user.name}!</p>}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/lessons" component={Lessons} />
          <Route path="/practice" component={Practice} />
          <Route path="/progress" component={Progress} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
// Registration component
const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the formData to your backend
    console.log('Registration data:', formData);
    // TODO: Implement actual registration logic
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

// Add Register to the list of components
const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulating user authentication
    setUser({ name: 'Music Learner' });
  }, []);

  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/lessons">Lessons</Link></li>
            <li><Link to="/practice">Practice</Link></li>
            <li><Link to="/progress">Progress</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </nav>

        {user && <p>Welcome, {user.name}!</p>}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/lessons" component={Lessons} />
          <Route path="/practice" component={Practice} />
          <Route path="/progress" component={Progress} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
};

const Calendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from an API or load from local storage
    // This is a placeholder for demonstration
    setEvents([
      { id: 1, title: 'Piano Lesson', date: '2023-05-15' },
      { id: 2, title: 'Guitar Practice', date: '2023-05-17' },
      { id: 3, title: 'Music Theory Class', date: '2023-05-20' },
    ]);
  }, []);

  const addEvent = (newEvent) => {
    setEvents([...events, { id: Date.now(), ...newEvent }]);
  };

  return (
    <div className="calendar">
      <h2>Music Learning Calendar</h2>
      <div className="event-list">
        {events.map((event) => (
          <div key={event.id} className="event-item">
            <span>{event.date}</span>
            <span>{event.title}</span>
          </div>
        ))}
      </div>
      {/* Add a form or modal for adding new events */}
    </div>
  );
};

// Update the App component to include the Calendar route
const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulating user authentication
    setUser({ name: 'Music Learner' });
  }, []);

  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/lessons">Lessons</Link></li>
            <li><Link to="/practice">Practice</Link></li>
            <li><Link to="/progress">Progress</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/calendar">Calendar</Link></li>
          </ul>
        </nav>

        {user && <p>Welcome, {user.name}!</p>}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/lessons" component={Lessons} />
          <Route path="/practice" component={Practice} />
          <Route path="/progress" component={Progress} />
          <Route path="/register" component={Register} />
          <Route path="/calendar" component={Calendar} />
        </Switch>
      </div>
    </Router>
  );
};


// Contact Us component
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the formData to your backend
    console.log('Contact form data:', formData);
    // TODO: Implement actual form submission logic
  };

  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

// Update the App component to include the ContactUs route
const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulating user authentication
    setUser({ name: 'Music Learner' });
  }, []);

  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/lessons">Lessons</Link></li>
            <li><Link to="/practice">Practice</Link></li>
            <li><Link to="/progress">Progress</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/calendar">Calendar</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>

        {user && <p>Welcome, {user.name}!</p>}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/lessons" component={Lessons} />
          <Route path="/practice" component={Practice} />
          <Route path="/progress" component={Progress} />
          <Route path="/register" component={Register} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/contact" component={ContactUs} />
        </Switch>
      </div>
    </Router>
  );
};

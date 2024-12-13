constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      errors: {
        username: '',
        email: '',
        password: ''
      }
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  validateForm = () => {
    const { username, email, password } = this.state;
    let errors = { username: '', email: '', password: '' };
    let formIsValid = true;

    if (!username) {
      formIsValid = false;
      errors.username = 'Username is required';
    }

    if (!email) {
      formIsValid = false;
      errors.email = 'Email is required';
    }

    if (!password) {
      formIsValid = false;
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      formIsValid = false;
      errors.password = 'Password must be at least 6 characters long';
    }

    this.setState({ errors });
    return formIsValid;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm()) {
      alert('Form submitted successfully');
    }
  }

  render() {
    const { username, email, password, errors } = this.state;

    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
          </div>
          <div>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
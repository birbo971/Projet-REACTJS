import React, { Component } from 'react';
import '../../common/Styles/NavBar.scss'
import { Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,TabContent, TabPane,Form,Input,FormGroup, ButtonGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import '../../common/Styles/NavBar.css';
import Select from 'react-select';
import {connect} from 'react-redux';
import { loginUser } from '../../_redux/actions/authentication';
import { logoutUser } from '../../_redux/actions/authentication';
import { withRouter } from 'react-router-dom';
import '../../common/Styles/NavBar.css';
import { Link } from 'react-router-dom';

  const day = [
    {label:'1',value:'1'},
    {label:'2',value:'2'},
    {label:'3',value:'3'},
    {label:'4',value:'4'},
    {label:'5',value:'5'},
    {label:'6',value:'6'},
    {label:'7',value:'7'},
    {label:'8',value:'8'},
    {label:'9',value:'9'},
    {label:'10',value:'10'},
    {label:'11',value:'11'},
    {label:'12',value:'12'},
    {label:'13',value:'13'},
    {label:'14',value:'14'},
    {label:'15',value:'15'},
    {label:'16',value:'16'},
    {label:'17',value:'17'},
    {label:'18',value:'18'},
    {label:'19',value:'19'},
    {label:'20',value:'20'},
    {label:'21',value:'21'},
    {label:'22',value:'22'},
    {label:'23',value:'23'},
    {label:'24',value:'24'},
    {label:'25',value:'25'},
    {label:'26',value:'26'},
    {label:'27',value:'27'},
    {label:'28',value:'28'},
    {label:'29',value:'29'},
    {label:'30',value:'30'},
    {label:'31',value:'31'},
  ]

  const month = [
    {label:'January',value:'1'},
    {label:'February',value:'2'},
    {label:'March',value:'3'},
    {label:'April',value:'4'},
    {label:'May',value:'5'},
    {label:'June',value:'6'},
    {label:'July',value:'7'},
    {label:'August',value:'8'},
    {label:'September',value:'9'},
    {label:'October',value:'10'},
    {label:'November',value:'11'},
    {label:'December',value:'12'},
  ]
  const year = [
    { label: '2019', value: '2019' },
    { label: '2018', value: '2018' },
    { label: '2017', value: '2017' },
    { label: '2016', value: '2016' },
    { label: '2015', value: '2015' },
    { label: '2014', value: '2014' },
    { label: '2013', value: '2013' },
    { label: '2012', value: '2012' },
    { label: '2011', value: '2011' },
    { label: '2010', value: '2010' },
    { label: '2009', value: '2009' },
    { label: '2008', value: '2008' },
    { label: '2007', value: '2007' },
    { label: '2006', value: '2006' },
    { label: '2005', value: '2005' },
    { label: '2004', value: '2004' },
    { label: '2003', value: '2003' },
    { label: '2002', value: '2002' },
    { label: '2001', value: '2001' },
    { label: '2000', value: '2000' },
    { label: '1999', value: '1999' },
    { label: '1998', value: '1998' },
    { label: '1997', value: '1997' },
    { label: '1996', value: '1996' },
    { label: '1995', value: '1995' },
    { label: '1994', value: '1994' },
    { label: '1993', value: '1993' },
    { label: '1992', value: '1992' },
    { label: '1991', value: '1991' },
    { label: '1990', value: '1990' },
    { label: '1989', value: '1989' },
    { label: '1988', value: '1988' },
    { label: '1987', value: '1987' },
    { label: '1986', value: '1986' },
    { label: '1985', value: '1985' },
    { label: '1984', value: '1984' },
    { label: '1983', value: '1983' },
    { label: '1982', value: '1982' },
    { label: '1981', value: '1981' },
    { label: '1980', value: '1980' },
    { label: '1979', value: '1979' },
    { label: '1978', value: '1978' },
    { label: '1977', value: '1977' },
    { label: '1976', value: '1976' },
    { label: '1975', value: '1975' },
    { label: '1974', value: '1974' },
    { label: '1973', value: '1973' },
    { label: '1972', value: '1972' },
    { label: '1971', value: '1971' },
    { label: '1970', value: '1970' },
    { label: '1969', value: '1969' },
    { label: '1968', value: '1968' },
    { label: '1967', value: '1967' },
    { label: '1966', value: '1966' },
    { label: '1965', value: '1965' },
    { label: '1964', value: '1964' },
    { label: '1963', value: '1963' },
    { label: '1962', value: '1962' },
    { label: '1961', value: '1961' },
    { label: '1960', value: '1960' },
    { label: '1959', value: '1959' },
    { label: '1958', value: '1958' },
    { label: '1957', value: '1957' },
    { label: '1956', value: '1956' },
    { label: '1955', value: '1955' },
    { label: '1954', value: '1954' },
    { label: '1953', value: '1953' },
    { label: '1952', value: '1952' },
    { label: '1951', value: '1951' },
    { label: '1950', value: '1950' },
    { label: '1949', value: '1949' },
    { label: '1948', value: '1948' },
    { label: '1947', value: '1947' },
    { label: '1946', value: '1946' },
    { label: '1945', value: '1945' },
    { label: '1944', value: '1944' },
    { label: '1943', value: '1943' },
    { label: '1942', value: '1942' },
    { label: '1941', value: '1941' },
    { label: '1940', value: '1940' },
    { label: '1939', value: '1939' },
    { label: '1938', value: '1938' },
    { label: '1937', value: '1937' },
    { label: '1936', value: '1936' },
    { label: '1935', value: '1935' },
    { label: '1934', value: '1934' },
    { label: '1933', value: '1933' },
    { label: '1932', value: '1932' },
    { label: '1931', value: '1931' },
    { label: '1930', value: '1930' },
    { label: '1929', value: '1929' },
    { label: '1928', value: '1928' },
    { label: '1927', value: '1927' },
    { label: '1926', value: '1926' },
    { label: '1925', value: '1925' },
    { label: '1924', value: '1924' },
    { label: '1923', value: '1923' },
    { label: '1922', value: '1922' },
    { label: '1921', value: '1921' },
    { label: '1920', value: '1920' },
    { label: '1919', value: '1919' },
    { label: '1918', value: '1918' },
    { label: '1917', value: '1917' },
    { label: '1916', value: '1916' },
    { label: '1915', value: '1915' },
    { label: '1914', value: '1914' },
    { label: '1913', value: '1913' },
    { label: '1912', value: '1912' },
    { label: '1911', value: '1911' },
    { label: '1910', value: '1910' },
    { label: '1909', value: '1909' },
    { label: '1908', value: '1908' },
    { label: '1907', value: '1907' },
    { label: '1906', value: '1906' },
    { label: '1905', value: '1905' },
    { label: '1904', value: '1904' },
    { label: '1903', value: '1903' },
    { label: '1902', value: '1902' },
    { label: '1901', value: '1901' },
    { label: '1900', value: '1900' }
    
    
  ];



class NavBar extends Component {
  
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,  
      modal: false,
      activeTab: '1',
      cSelected: [],
      email: '',
      password: '',
      errors: {},
      isLoading: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
    this.toggleActiveTabs = this.toggleTabs.bind(this);
    this.switchToTab1 = this.switchToTab1.bind(this);
    this.switchToTab2 = this.switchToTab2.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
        this.setState({
            errors: nextProps.errors
        });
    }
    if(nextProps.auth.isAuthenticated) {
      console.log(nextProps.auth.isAuthenticated);
      this.toggleModal();
    }
  }
  handleInputChange(e) {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      isLoading: true
    });
    const user = {
        email: this.state.email,
        password: this.state.password,
    }
    console.log(user);
    this.props.loginUser(user);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  toggleModal() {
    this.setState(prevState => ({
      modal: !prevState.modal,  
      closeAll: false
    }));
  }
  toggleTabs(tab) {
            if (this.state.activeTab !== tab) {
                this.setState({
                    activeTab: tab
                });
            }
        }
      
  switchToTab2() {
    this.toggleTabs('2');
  }
  
  switchToTab1() {
    this.toggleTabs('1');
  }
  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }
  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }

  render() {
    const {isAuthenticated} = this.props.auth;
    const authLinks = (
      <Nav className="ml-auto" navbar>
        <NavItem>
        <NavLink onClick={this.onLogout.bind(this)} ><button className="signup">Logout</button></NavLink>
        </NavItem>
      </Nav>
    );
    const guestLinks = (
       <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink onClick={this.toggleModal} className="login">Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={this.toggleModal} ><button className="signup">Signup</button></NavLink>
        </NavItem>
      </Nav>
    );
    return (
      <div className="NavBar">
        <Navbar color="transparent" expand="md" dark>
          <Link className="navbar-brand ml-4" to="/">Emy - MedicGlobal</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link"  to="/Services">Services</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link"  to="/About">About Us</Link>
              </NavItem>
            </Nav>
              {isAuthenticated ? authLinks : guestLinks}
          </Collapse>
        </Navbar>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
          <ModalHeader toggle={this.toggleModal}>
          <Nav tabs>
            <NavItem>
            <NavLink active={this.state.activeTab === '1'} onClick={() => { this.toggleTabs('1'); }} className="Sign-Btn">Sign In</NavLink>
            </NavItem>
            <NavItem>
              <NavLink active={this.state.activeTab === '2'} onClick={() => { this.toggleTabs('2'); }} className="Sign-Btn">Sign Up</NavLink>
            </NavItem>
          </Nav></ModalHeader>
          <ModalBody>

          <div className="card-body">
              <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                  <Form onSubmit={this.handleSubmit} className="Form-Modal-Connect">
                  <FormGroup className="has-email-connect">
                    <FontAwesomeIcon icon="envelope" className="form-control-feedback"/>
                    <Input 
                      type="email" name="email" id="Email-ModalConnect" placeholder="Email" 
                      onChange={ this.handleInputChange }
                      value={ this.state.email }
                    />
                  </FormGroup>
                  <FormGroup className="has-password-connect">
                    <FontAwesomeIcon icon="key" className="form-control-feedback"/>
                    <Input
                      type="password" name="password" id="Password-ModalConnect" placeholder="Password" 
                      onChange={ this.handleInputChange }
                      value={ this.state.password }
                     />
                  </FormGroup>
                  <Button type="submit">Login</Button>
                  <p className="Forgotten-pwd"><a href="#">Forgotten password ?</a></p>
                      <hr/>
                    <p className="Footer-modal">You don't have an account ? <a href="#" onClick={() => { this.toggleTabs('2'); }}>Sign Up</a></p>
                  </Form>
                  </TabPane>
                  <TabPane tabId="2">
                      <Form className="Form-Modal-Register">
                      <FormGroup className="Form-Modal-Gender">
                      <p><FontAwesomeIcon icon="venus-mars" className="form-control-feedback"/> Gender</p>
                        <ButtonGroup>
                          <Button onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>Man</Button>
                          <Button onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Woman</Button>
                        </ButtonGroup>
                      </FormGroup>
                      <FormGroup className="has-email-register">
                        <FontAwesomeIcon icon="envelope" className="form-control-feedback"/>
                          <Input type="email" name="EmailReg" id="Email-ModalRegister" placeholder="Email" />
                      </FormGroup>
                      <FormGroup className="has-firstName-register">
                        <FontAwesomeIcon icon="user" className="form-control-feedback"/>
                        <Input type="text" name="FirstName" id="FirstName-ModalRegister" placeholder="FirstName" />
                      </FormGroup>
                      <FormGroup className="has-lastName-register">
                      <FontAwesomeIcon icon="user" className="form-control-feedback"/>
                          <Input type="text" name="LastName" id="LastName-ModalRegister" placeholder="LastName" />
                      </FormGroup>
                      <FormGroup className="has-pass-register">
                      <FontAwesomeIcon icon="key" className="form-control-feedback"/>
                          <Input type="password" name="PasswordReg" id="Password-ModalRegister" placeholder="Password" />
                      </FormGroup>
                      <FormGroup className="has-pass-register">
                      <FontAwesomeIcon icon="key" className="form-control-feedback"/>
                          <Input type="password" name="RepPasswordReg" id="RepPassword-ModalRegister" placeholder="Repeat Password" />
                      </FormGroup>
                      <FormGroup className="Title-BirthDay">
                        <p><FontAwesomeIcon icon="birthday-cake" className="form-control-feedback"/> Date Of Birth</p>
                        <p className="small">To register, you must be at least 18 years old. Other users will not see your date of birth.</p>
                      </FormGroup>
                      <FormGroup className="Form-DateBirth">
                        <Select options={ month } placeholder="Mois" className="DateBirth"/>
                        <Select options={ day } placeholder="Jour" className="DateBirthDay"/>
                        <Select options={ year } placeholder="Année" className="DateBirth"/>
                      </FormGroup>
                          <Button type="submit" color="secondary">Create Account</Button>
                      </Form>
                      <br/>
                      <hr/>
                    <p className="Footer-modal">Already have an Emy account ? <a href="#" onClick={() => { this.toggleTabs('1'); }}>Login</a></p>
                    </TabPane>
              </TabContent>
          </div>
          </ModalBody>
        </Modal>
      </div>
      )
    }
  }
  const mapStateToProps = state => ({
    errors: state.errors,
    auth: state.auth
  });
  export default connect(mapStateToProps,{ loginUser, logoutUser })(withRouter(NavBar));
import React, {Component} from 'react';
import './styles/BadgeNew.css'
import header from '../images/platziconf-logo.svg'
// import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';
import PageLoading from '../components/PageLoading';

class BadgeNew extends Component {

    state = {
        loading: false,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: ''
        } 
    };

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault(); // Evita que trate de enviar los datos para otro lado
        this.setState({loading: true, error: null});

        try {
            await api.badges.create(this.state.form);
            this.setState({loading: false});

            this.props.history.push('/badges'); //función de las rutas
        } catch (error) {
            this.setState({loading: false, error: error});
        }
    }

    render() {
        if(this.state.loading) {
            return <PageLoading />;
        }

        return(
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">

                        <div className="col-6">
                        <Badge 
                            firstName={this.state.form.firstName || 'First Name'} 
                            lastName={this.state.form.lastName || 'Last Name'} 
                            avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                            jobTitle={this.state.form.jobTitle || 'Job Title'} 
                            email={this.state.form.email || 'Email'}
                            twitter={this.state.form.twitter || 'Twitter'} 
                        />
                        </div>

                        <div className="col-6">
                            <h1>New Attendant</h1>
                            <BadgeForm 
                                onChange={this.handleChange} 
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form} 
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew;
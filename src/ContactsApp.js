import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
class ContactsApp extends React.Component {
    constructor() {
        super();
        this.state = {
            filterText: ''
        }
    }
    handleUserInput(searchItem) {
        this.setState({
            filterText: searchItem
        })
    }
    render() {
        return (
            <div>
                <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
                <ContactList contacts={this.props.contacts} filterText={this.state.filterText}/>
            </div>
        )
    }
}

ContactsApp.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
}

class SearchBar extends React.Component {
    handleChange(event) {
        this.props.onUserInput(event.target.value)
    }
    render() {
        return <input type="search" placeholder="search" value={this.props.filterText} onChange={this.handleChange.bind(this)}/>
    }
}
SearchBar.propTypes = {
    onUserInput: PropTypes.func.isRequired,
    filterText: PropTypes.string.isRequired
}

class ContactList extends React.Component {
    render() {
        let filteredContacts = this.props.contacts.filter(
            (contact) => contact.name.indexOf(this.props.filterText) !== -1
        );
        console.log(filteredContacts);
        return (
            <ul>
                {
                    filteredContacts.map( (contact) =>
                        <ContactItem key={contact.email} name={contact.name} email={contact.email} />
                    )
                }
            </ul>
        )
    }
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
}

class ContactItem extends React.Component {
    render() {
        return <li>{this.props.name} - {this.props.email}</li>
    }
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}

let contacts = [
    { name: "Cassio Zen", email: "cassiozen@gmail.com" },
    { name: "Dan Abramov", email: "gaearon@somewhere.com" },
    { name: "Pete Hunt", email: "floydophone@somewhere.com" },
    { name: "Paul O’Shannessy", email: "zpao@somewhere.com" },
    { name: "Ryan Florence", email: "rpflorence@somewhere.com" },
    { name: "Sebastian Markbage", email: "sebmarkbage@here.com" },
]
ReactDOM.render( <ContactsApp contacts={contacts} />, document.getElementById('abc'));
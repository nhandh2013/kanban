import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
class ContactsApp extends React.Component {
    render() {
        return (
            <div>
                <SearchBar />
                <ContactList contacts={this.props.contacts} />
            </div>
        )
    }
}

ContactsApp.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
}

class SearchBar extends React.Component {
    render() {
        return <input type="search" placeholder="search"/>
    }
}

class ContactList extends React.Component {
    render() {
        return (
            <ul>
                {
                    this.props.contacts.map( (contact) =>
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
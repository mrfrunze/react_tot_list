import ItemList from './ItemList';

const Content = ({items, handleChecked, handleDelete}) => {

  return ( 
    <main>
      {items.length ? (
          <ItemList 
          items={items}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
          />
        ) : (
          <p style={{
            marginTop:'20px',
            color:'red',
            fontWeight:'bold',
            fontSize:'36px'
          }}>
            Your list is empty.
          </p>
        )
      }
    </main>
  )
}

export default Content;
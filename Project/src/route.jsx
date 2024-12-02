import {createBrowserRouter, Link, RouterProvider} from 'react-router-dom';

 export const router = createBrowserRouter([
  {
    path: '/',
    element: (
    <div>
      Page dacceuil
      <nav>
        <Link to='/BookDetails'>Détail des livres</Link>
        <Link to='/AddBook'>Ajouter livres</Link>
      </nav>
    </div>
    )
  },
  {
    path: '/BookDetails',
    element: (
      <div>
        Page détail des livres
        <nav>
        <Link to='/BookDetails'>Détail des livres</Link>
        <Link to='/AddBook'>Ajouter livres</Link>
      </nav>
      </div>
    )
  },
  {
    path: '/AddBook',
    element: (
      <div>
        Page dajout de livres
        <nav>
        <Link to='/BookDetails'>Détail des livres</Link>
        <Link to='/AddBook'>Ajouter livres</Link>
        </nav>
      </div>
    )
  },
])

function AppRoutes() {
  return <RouterProvider router={router}/>
} 

export default AppRoutes;
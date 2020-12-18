import Heading from "../layout/Heading";
import { Helmet } from 'react-helmet';
import RecipeList from "../recipes/RecipeList";

function Home() {
    return (
        <div>
            <Helmet>
                <title>MA4 | Recipes</title>
            </Helmet>              
            <Heading title="Recipes"/>            
            <RecipeList/>            
        </div>
    );
}
export default Home;
NEXTAUTH STEPS:
npm i next-auth
create auth.ts in root folder and add configuration code of provider(like github)
create app\auth\[nextAuth]\roue.ts. This connects the NextAuth API route using your auth.ts configuration.
import auth() in NAVBAR or in components and use SignIn and SignOut to perform operations

SearchBar:
we create a input searchBar and pass searchParams query and pass the type of query use asunc and await to store query in a var and pass it to search form component and extract it

FEATURES:
EXPLORE PAGE - ADD ALL STORIES WITH THERE DYNAMIC PATH TO VIEW WHOLE STORY✅
SEARCH - TO SEARCH STORIES ACCORDING TO TAGS
USER PROFILES - DYNAMIC ID PATHS 
ADD - ALL POSTS OF A PARTICULAR USER ON THE USER PROFILE
A VIEWS COUNT ON POSTS/STORIES
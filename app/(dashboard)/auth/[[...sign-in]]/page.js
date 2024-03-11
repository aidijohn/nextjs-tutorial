const SignInPage = ({ params }) => {
  console.log(params);
  return <h1 className='text-7xl'>SignInPage</h1>;
};
export default SignInPage;

//access localhost:3000/auth  --yes

//access localhost:3000/dashboard/auth  --404

//so the directory (dashboard) helps us to group our routes

//since we have dynamic route [[..sign-in]] access localhost:3000/auth passes n we dont add the 'dashboard'
import { Links } from './AuthNav.styles';

export default function AuthNav() {
  return (
    <div>
      <Links to="/registration">Register</Links>
      <Links to="/login">Log In</Links>
    </div>
  );
}
import "./vendor/jquery-3.5.1.min.js";
import { foo } from "./modules/foo.js";

$("#foo").html(foo("bar"));

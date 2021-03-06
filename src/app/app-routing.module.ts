import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./Home/about/about.component";
import { HomeComponent } from "./Home/home/home.component";
import { ProfileComponent } from "./Home/profile/profile.component";
import { WishlistComponent } from "./Home/wishlist/wishlist.component";
import { ProductHolderComponent } from "./ProductDisplay/product-holder/product-holder.component";
import { SitesComponent } from "./ViewAll/sites/sites.component";
import { DealsComponent } from "./ViewAll/deals/deals.component";
import { SearchResolver } from "./Service/search.resolver";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "search",
    component: ProductHolderComponent,
    resolve: { message: SearchResolver }
  },
  {path: "auth", loadChildren: "app/auth-module/auth-module#AuthModule"},
  { path: "category/:cat-name", component: ProductHolderComponent },
  { path: "sites/:id", component: ProductHolderComponent },
  { path: "home", component: HomeComponent },
  { path: "deals", component: DealsComponent },
  { path: "sites", component: SitesComponent },
  { path: "profile", component: ProfileComponent },
  { path: "wishlist", component: WishlistComponent },
  { path: "about", component: AboutComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })
  ],
  exports: [RouterModule],
  providers: [SearchResolver]
})
export class AppRoutingModule {}

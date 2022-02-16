var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Model } from "../../core/orm";
import User from "./User";
export default class Address extends Model {
}
__decorate([
    Column.int({
        references: new User(),
    }),
    __metadata("design:type", Number)
], Address.prototype, "user_id", void 0);
__decorate([
    Column.text(),
    __metadata("design:type", String)
], Address.prototype, "state", void 0);
__decorate([
    Column.text(),
    __metadata("design:type", String)
], Address.prototype, "city", void 0);
__decorate([
    Column.text(),
    __metadata("design:type", String)
], Address.prototype, "street_address", void 0);
__decorate([
    Column.text({
        nullable: true
    }),
    __metadata("design:type", String)
], Address.prototype, "zip_code", void 0);
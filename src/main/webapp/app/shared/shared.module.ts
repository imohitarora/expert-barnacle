import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ExpertSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ExpertSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ExpertSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExpertSharedModule {
  static forRoot() {
    return {
      ngModule: ExpertSharedModule
    };
  }
}

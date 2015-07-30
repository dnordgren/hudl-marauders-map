/*
 * Geddy JavaScript Web development framework
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/

var router = new geddy.RegExpRouter();

router.get('/').to('Main.index');

// Basic routes
// router.match('/moving/pictures/:id', 'GET').to('Moving.pictures');
//
// router.match('/farewells/:farewelltype/kings/:kingid', 'GET').to('Farewells.kings');
//
// Can also match specific HTTP methods only
// router.get('/xandadu').to('Xanadu.specialHandler');
// router.del('/xandadu/:id').to('Xanadu.killItWithFire');
//
// Resource-based routes
// router.resource('hemispheres');
//
// Nested Resource-based routes
// router.resource('hemispheres').nest(function(){
//   this.resource('countries');
//   this.get('/print(.:format)').to('Hemispheres.print');
// });

router.get('/devices(.:format)').to('devices.index')
router.get('/devices/add(.:format)').to('devices.add')
router.get('/devices/:udid(.:format)').to('devices.show')
router.get('/devices/:udid/edit(.:format)').to('devices.edit')
router.post('/devices(.:format)').to('devices.create')
router.put('/devices/:udid(.:format)').to('devices.update')
router.del('/devices/:udid(.:format)').to('devices.destroy')

router.resource('users');

exports.router = router;

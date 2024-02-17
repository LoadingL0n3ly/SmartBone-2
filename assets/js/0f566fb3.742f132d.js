"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[373],{7929:e=>{e.exports=JSON.parse('{"functions":[{"name":"DrawOverlay","desc":"","params":[{"name":"Overlay","desc":"","lua_type":"ImOverlay"}],"returns":[],"function_type":"method","realm":["Client"],"source":{"line":423,"path":"src/Components/BoneTree.lua"}},{"name":"new","desc":"","params":[],"returns":[{"desc":"","lua_type":"SmartBone"}],"function_type":"static","source":{"line":73,"path":"src/init.lua"}},{"name":"m_AppendBone","desc":":::caution Caution:\\nPrivate Functions can change syntax at any time without warning. Only use these if you\'re prepared to fix any issues that arise.\\n:::\\nUsed to add a bone to the provided bone tree\\r","params":[{"name":"BoneTree","desc":"","lua_type":"table"},{"name":"BoneObject","desc":"","lua_type":"Bone"},{"name":"ParentIndex","desc":"","lua_type":"number"},{"name":"HeirarchyLength","desc":"","lua_type":"number"}],"returns":[],"function_type":"method","private":true,"source":{"line":96,"path":"src/init.lua"}},{"name":"m_CreateBoneTree","desc":":::caution Caution:\\nPrivate Functions can change syntax at any time without warning. Only use these if you\'re prepared to fix any issues that arise.\\n:::\\nCreates a bone tree from the RootPart and RootBone and then adds all child bones via m_AppendBone\\r","params":[{"name":"RootPart","desc":"","lua_type":"BasePart"},{"name":"RootBone","desc":"","lua_type":"Bone"}],"returns":[],"function_type":"method","private":true,"source":{"line":134,"path":"src/init.lua"}},{"name":"m_UpdateViewFrustum","desc":":::caution Caution:\\nPrivate Functions can change syntax at any time without warning. Only use these if you\'re prepared to fix any issues that arise.\\n:::\\nUpdates the view frustum used for optimization\\r","params":[],"returns":[],"function_type":"method","private":true,"source":{"line":190,"path":"src/init.lua"}},{"name":"m_ConstrainBoneTree","desc":":::caution Caution:\\nPrivate Functions can change syntax at any time without warning. Only use these if you\'re prepared to fix any issues that arise.\\n:::\\nConstrains each bone in the provided bone tree and cleans up colliders\\r","params":[{"name":"BoneTree","desc":"","lua_type":"table"},{"name":"Delta","desc":"","lua_type":"number"}],"returns":[],"function_type":"method","private":true,"source":{"line":230,"path":"src/init.lua"}},{"name":"m_UpdateBoneTree","desc":":::caution Caution:\\nPrivate Functions can change syntax at any time without warning. Only use these if you\'re prepared to fix any issues that arise.\\n:::\\nUpdates the provided bone tree with all optimizations\\r","params":[{"name":"BoneTree","desc":"","lua_type":"table"},{"name":"Index","desc":"","lua_type":"number"},{"name":"Delta","desc":"","lua_type":"number"}],"returns":[],"function_type":"method","private":true,"source":{"line":247,"path":"src/init.lua"}},{"name":"m_CheckDestroy","desc":":::caution Caution:\\nPrivate Functions can change syntax at any time without warning. Only use these if you\'re prepared to fix any issues that arise.\\n:::\\nReturns true if the root should be destroyed\\r","params":[],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","private":true,"source":{"line":311,"path":"src/init.lua"}},{"name":"LoadObject","desc":"Loads the provided object\\r","params":[{"name":"Object","desc":"","lua_type":"BasePart"}],"returns":[],"function_type":"method","source":{"line":327,"path":"src/init.lua"}},{"name":"LoadColliderModule","desc":"Loads the provided collider module onto the provided object\\r","params":[{"name":"ColliderModule","desc":"","lua_type":"ModuleScript"},{"name":"Object","desc":"","lua_type":"BasePart"}],"returns":[],"function_type":"method","source":{"line":368,"path":"src/init.lua"}},{"name":"LoadRawCollider","desc":"Loads the raw collider data onto the provided object\\r","params":[{"name":"ColliderData","desc":"","lua_type":"table"},{"name":"Object","desc":"","lua_type":"BasePart"}],"returns":[],"function_type":"method","source":{"line":383,"path":"src/init.lua"}},{"name":"SkipUpdate","desc":"Resets all bone trees to their rest position\\r","params":[],"returns":[],"function_type":"method","source":{"line":391,"path":"src/init.lua"}},{"name":"StepBoneTrees","desc":"Updates all bone trees\\r","params":[{"name":"Delta","desc":"","lua_type":"number"}],"returns":[],"function_type":"method","source":{"line":402,"path":"src/init.lua"}},{"name":"DrawDebug","desc":"Draws the debug gizmos\\r","params":[{"name":"DRAW_COLLIDERS","desc":"","lua_type":"boolean"},{"name":"DRAW_CONTACTS","desc":"","lua_type":"boolean"},{"name":"DRAW_PHYSICAL_BONE","desc":"","lua_type":"boolean"},{"name":"DRAW_BONE","desc":"","lua_type":"boolean"},{"name":"DRAW_AXIS_LIMITS","desc":"","lua_type":"boolean"},{"name":"DRAW_ROOT_PART","desc":"","lua_type":"boolean"},{"name":"DRAW_FILL_COLLIDERS","desc":"","lua_type":"boolean"},{"name":"DRAW_COLLIDER_INFLUENCE","desc":"","lua_type":"boolean"},{"name":"DRAW_COLLIDER_AWAKE","desc":"","lua_type":"boolean"},{"name":"DRAW_COLLIDER_BROADPHASE","desc":"","lua_type":"boolean"},{"name":"DRAW_BOUNDING_BOX","desc":"","lua_type":"boolean"},{"name":"DRAW_ROTATION_LIMITS","desc":"","lua_type":"boolean"},{"name":"DRAW_ACCELERATION_INFO","desc":"","lua_type":"boolean"}],"returns":[],"function_type":"method","realm":["Client"],"source":{"line":430,"path":"src/init.lua"}},{"name":"DrawOverlay","desc":"Draws the debug overlay\\r","params":[{"name":"Overlay","desc":"","lua_type":"ImOverlay"}],"returns":[],"function_type":"method","realm":["Client"],"source":{"line":460,"path":"src/init.lua"}},{"name":"Destroy","desc":"Destroys the root and all its children\\r","params":[],"returns":[],"function_type":"method","source":{"line":496,"path":"src/init.lua"}},{"name":"Start","desc":"Collects all SmartBone objects and SmartBone colliders and starts running physics + collision on them\\r","params":[],"returns":[],"function_type":"static","realm":["Client"],"source":{"line":513,"path":"src/init.lua"}}],"properties":[{"name":"ID","desc":"Unique ID of the root object\\r","lua_type":"string","readonly":true,"source":{"line":55,"path":"src/init.lua"}},{"name":"BoneTrees","desc":"Table of all bone trees under this root\\r","lua_type":"table","source":{"line":59,"path":"src/init.lua"}},{"name":"ColliderObjects","desc":"Table of all colliders assigned to this root\\r","lua_type":"table","source":{"line":63,"path":"src/init.lua"}},{"name":"ShouldDestroy","desc":"True if the root has no bonetrees, this is already handled by the runtime\\r","lua_type":"boolean","source":{"line":67,"path":"src/init.lua"}}],"types":[],"name":"SmartBone","desc":"Root for all SmartBone objects.\\r","source":{"line":50,"path":"src/init.lua"}}')}}]);
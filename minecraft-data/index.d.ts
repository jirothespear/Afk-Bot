declare namespace MinecraftData {

  type Attributes = Attribute[];
  
  interface Attribute {
    /**
     * The Mojang name of an attribute (usually is generic.[name] or minecraft:generic.[name]
     */
    resource: string;
    /**
     * The name of an attribute
     */
    name: string;
  }
  
  
  type Biomes = Biome[];
  
  interface Biome {
    /**
     * The unique identifier for a biome
     */
    id: number;
    /**
     * The name of a biome
     */
    name: string;
    /**
     * The category of a biome
     */
    category: string;
    /**
     * An indicator for the temperature in a biome
     */
    temperature: number;
    /**
     * The type of precipitation: none, rain or snow
     */
    precipitation: string;
    /**
     * The dimension of a biome: overworld, nether or end
     */
    dimension: string;
    /**
     * The display name of a biome
     */
    displayName: string;
    /**
     * The color in a biome
     */
    color: number;
    /**
     * How much rain there is in a biome
     */
    rainfall: number;
    [k: string]: unknown;
  }
  
  
  interface BlockCollisionShapes {
    /**
     * Each block's collision shape id(s).
     */
    blocks: {
      [k: string]: number | [number, ...number[]];
    };
    /**
     * Collision shapes by id, each shape being composed of a list of collision boxes.
     */
    shapes: {
      /**
       * The boxes of this shape.
       */
      [k: string]: [number, number, number, number, number, number][];
    };
  }
  
  
  type BlockLoot = BlockLootEntry[];
  
  interface BlockLootEntry {
    /**
     * The name of the block
     */
    block: string;
    /**
     * The states of the block (Bedrock Edition)
     */
    states?: {
      [k: string]: unknown;
    };
    /**
     * The list of item drops
     */
    drops: ItemDrop[];
  }
  interface ItemDrop {
    /**
     * The name of the item being dropped
     */
    item: string;
    /**
     * The metadata of the item being dropped (Bedrock Edition)
     */
    metadata?: number;
    /**
     * The percent chance of the item drop to occur
     */
    dropChance: number;
    /**
     * The min/max of number of items in this item drop stack
     */
    stackSizeRange: unknown[];
    /**
     * The required age of the block for the item drop to occur
     */
    blockAge?: number;
    /**
     * If silk touch is required
     */
    silkTouch?: boolean;
    /**
     * If not having silk touch is required
     */
    noSilkTouch?: boolean;
  }
  
  
  type Blocks = Block[];
  
  interface Block {
    /**
     * The unique identifier for a block
     */
    id: number;
    /**
     * The display name of a block
     */
    displayName: string;
    /**
     * The name of a block
     */
    name: string;
    /**
     * Hardness of a block
     */
    hardness: number | null;
    /**
     * Stack size for a block
     */
    stackSize: number;
    /**
     * true if a block is diggable
     */
    diggable: boolean;
    /**
     * BoundingBox of a block
     */
    boundingBox: "block" | "empty";
    /**
     * Material of a block
     */
    material?: string;
    /**
     * Using one of these tools is required to harvest a block, without that you get a 3.33x time penalty.
     */
    harvestTools?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^[0-9]+$".
       */
      [k: string]: boolean;
    };
    variations?: {
      metadata: number;
      displayName: string;
      description?: string;
    }[];
    states?: {
      /**
       * The name of the property
       */
      name: string;
      /**
       * The type of the property
       */
      type: "enum" | "bool" | "int";
      /**
       * The possible values of the property
       */
      values?: unknown[];
      /**
       * The number of possible values
       */
      num_values: number;
    }[];
    drops: (
      | number
      | {
          /**
           * minimum number or chance, default : 1
           */
          minCount?: number;
          /**
           * maximum number or chance, default : minCount
           */
          maxCount?: number;
          drop:
            | number
            | {
                id: number;
                metadata: number;
              };
        }
    )[];
    /**
     * true if a block is transparent
     */
    transparent: boolean;
    /**
     * Light emitted by that block
     */
    emitLight: number;
    /**
     * Light filtered by that block
     */
    filterLight: number;
    /**
     * Minimum state id
     */
    minStateId?: number;
    /**
     * Maximum state id
     */
    maxStateId?: number;
    /**
     * Default state id
     */
    defaultState?: number;
    /**
     * Blast resistance
     */
    resistance?: number | null;
  }
  
  
  interface CommandsSchema {
    graph?: RootNode;
    parsers: ParserInfo[];
    [k: string]: unknown;
  }
  interface RootNode {
    type: "root";
    name: string;
    executable: boolean;
    redirects: string[];
    children: (LiteralNode | ArgumentNode)[];
    [k: string]: unknown;
  }
  interface LiteralNode {
    type: "literal";
    name: string;
    executable: boolean;
    redirects: string[];
    children: (LiteralNode | ArgumentNode)[];
    [k: string]: unknown;
  }
  interface ArgumentNode {
    type: "argument";
    name: string;
    executable: boolean;
    redirects: string[];
    children: (LiteralNode | ArgumentNode)[];
    parser?: {
      parser?: string;
      modifier?: {
        [k: string]: unknown;
      } | null;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }
  interface ParserInfo {
    parser: string;
    modifier: {
      [k: string]: unknown;
    } | null;
    examples: string[];
    [k: string]: unknown;
  }
  
  
  type Effects = Effect[];
  
  interface Effect {
    /**
     * The unique identifier for an effect
     */
    id: number;
    /**
     * The display name of an effect
     */
    displayName: string;
    /**
     * The name of an effect
     */
    name: string;
    /**
     * Whether an effect is positive or negative
     */
    type: "good" | "bad";
  }
  
  
  type Enchantments = Enchantment[];
  
  interface Enchantment {
    /**
     * The unique identifier for an enchantment
     */
    id: number;
    /**
     * The name of an enchantment
     */
    name: string;
    /**
     * The display name of an enchantment
     */
    displayName: string;
    /**
     * The maximum level of an enchantment
     */
    maxLevel: number;
    /**
     * Min cost equation's coefficients a * level + b
     */
    minCost: {
      a?: number;
      b?: number;
      [k: string]: unknown;
    };
    /**
     * Max cost equation's coefficients a * level + b
     */
    maxCost: {
      a?: number;
      b?: number;
      [k: string]: unknown;
    };
    /**
     * Can only be found in a treasure, not created
     */
    treasureOnly: boolean;
    /**
     * Is a curse, not an enchantment
     */
    curse: boolean;
    /**
     * List of enchantment not compatibles
     */
    exclude: string[];
    /**
     * The category of enchantable items
     */
    category: string;
    /**
     * Weight of the rarity of the enchantment
     */
    weight: number;
    /**
     * Can this enchantment be traded
     */
    tradeable: boolean;
    /**
     * Can this enchantment be discovered
     */
    discoverable: boolean;
    [k: string]: unknown;
  }
  
  
  type Entities = Entity[];
  
  interface Entity {
    /**
     * The unique identifier for an entity
     */
    id: number;
    /**
     * The internal id of an entity : used in eggs metadata for example
     */
    internalId?: number;
    /**
     * The display name of an entity
     */
    displayName: string;
    /**
     * The name of an entity
     */
    name: string;
    /**
     * The type of an entity
     */
    type: string;
    /**
     * The width of the entity
     */
    width: number | null;
    /**
     * The height of the entity
     */
    height: number | null;
    /**
     * The length of the entity
     */
    length?: number | null;
    /**
     * The offset of the entity
     */
    offset?: number | null;
    /**
     * The category of an entity : a semantic category
     */
    category?: string;
  }
  
  
  type EntityLoot = EntityLootEntry[];
  
  interface EntityLootEntry {
    /**
     * The name of the entity
     */
    entity: string;
    /**
     * The list of item drops
     */
    drops: ItemDrop[];
  }
  interface ItemDrop {
    /**
     * The name of the item being dropped
     */
    item: string;
    /**
     * The metadata of the item being dropped (Bedrock Edition)
     */
    metadata?: number;
    /**
     * The percent chance of the item drop to occur
     */
    dropChance: number;
    /**
     * The min/max of number of items in this item drop stack
     */
    stackSizeRange: unknown[];
    /**
     * If a player killer is required
     */
    playerKill?: boolean;
  }
  
  
  type VersionForFeatureIdentification = string;
  type Features = FeatureEntry[];
  
  interface FeatureEntry {
    /**
     * The name of the feature
     */
    name?: string;
    /**
     * The description of the feature
     */
    description?: string;
    /**
     * A tuple that describes the range of versions in the range
     */
    versions?: VersionForFeatureIdentification[];
    [k: string]: unknown;
  }
  
  
  type Foods = Food[];
  
  interface Food {
    /**
     * The unique identifier for an item
     */
    id: number;
    /**
     * The display name of an item
     */
    displayName: string;
    /**
     * Stack size for an item
     */
    stackSize: number;
    /**
     * The name of an item
     */
    name: string;
    /**
     * The amount of food points the food item replenishes
     */
    foodPoints: number;
    /**
     * The amount of saturation points the food  restores
     */
    saturation: number;
    /**
     * The effective quality of the food item
     */
    effectiveQuality: number;
    /**
     * The saturation ratio of the food item
     */
    saturationRatio: number;
    variations?: {
      metadata: number;
      displayName: string;
    }[];
  }
  
  
  type Instruments = Instrument[];
  
  interface Instrument {
    /**
     * The unique identifier for an instrument
     */
    id: number;
    /**
     * The name of an instrument
     */
    name: string;
    /**
     * The sound ID played by this instrument
     */
    sound?: string;
  }
  
  
  type Items = Item[];
  
  interface Item {
    /**
     * The unique identifier for an item
     */
    id: number;
    /**
     * The display name of an item
     */
    displayName: string;
    /**
     * Stack size for an item
     */
    stackSize: number;
    /**
     * describes categories of enchants this item can use
     */
    enchantCategories?: string[];
    /**
     * describes what items this item can be fixed with in an anvil
     */
    repairWith?: string[];
    /**
     * the amount of durability an item has before being damaged/used
     */
    maxDurability?: number;
    /**
     * The name of an item
     */
    name: string;
    variations?: {
      metadata: number;
      displayName: string;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  }
  
  
  interface EnUs {
    /**
     * This interface was referenced by `EnUs`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z.0-9_-]+$".
     */
    [k: string]: string;
  }
  
  
  type MapIcons = MapIcon[];
  
  interface MapIcon {
    /**
     * The unique identifier for a map icon
     */
    id: number;
    /**
     * The name of a map icon
     */
    name: string;
    /**
     * Description of the map icon's appearance
     */
    appearance?: string;
    /**
     * Visibility in item frames
     */
    visibleInItemFrame: boolean;
  }
  
  
  interface Materials {
    [k: string]: Material;
  }
  /**
   * This interface was referenced by `Materials`'s JSON-Schema definition
   * via the `patternProperty` "^[a-z;/_]+$".
   */
  interface Material {
    /**
     * This interface was referenced by `Material`'s JSON-Schema definition
     * via the `patternProperty` "^[0-9]+$".
     */
    [k: string]: number;
  }
  
  
  type Particles = Particle[];
  
  interface Particle {
    /**
     * The unique identifier for a particle
     */
    id?: number;
    /**
     * The name of a particle
     */
    name?: string;
    [k: string]: unknown;
  }
  
  
  type ProtocolVersions = {
    /**
     * The protocol version
     */
    version: number;
    dataVersion?: number;
    minecraftVersion: string;
    majorVersion: string;
    usesNetty?: boolean;
    releaseType?: string;
  }[];
  
  
  
  
  
  
  type Recipe = ShapedRecipe | ShapelessRecipe;
  /**
   * An item can be represented different ways.
   */
  type RecipeItem = Id | IdMetadata | Id1Metadata1Count1;
  /**
   * A single numerical ID or null.
   */
  type Id = number | null;
  /**
   * A list of id and metadata. This is preferred if there are many items at once, e.g. in a shape.
   */
  type IdMetadata = [] | [Id] | [Id, Metadata];
  type Metadata = number;
  type Count = number;
  /**
   * A shape is a list of rows, which are lists of items. There must be at least one row with at least one item in it. All rows must have the same length. Empty rows at the beginning or end of a shape may be omitted. Empty colums at the end may also be omitted. When an item can be crafted in a 2x2 grid, the shape may not be larger than 2x2.
   */
  type Shape = [ShapeRow] | [ShapeRow, ShapeRow] | [ShapeRow, ShapeRow, ShapeRow];
  type ShapeRow = [RecipeItem] | [RecipeItem, RecipeItem] | [RecipeItem, RecipeItem, RecipeItem];
  type Ingredients = [RecipeItem, ...RecipeItem[]];
  
  /**
   * A dictionary of quoted numerical item IDs. Each ID maps to a list of recipes. There may be multiple different recipes per item (same ID and metadata). The recipes may not be sorted.
   */
  interface Recipes {
    /**
     * This interface was referenced by `Recipes`'s JSON-Schema definition
     * via the `patternProperty` "^[0-9]+$".
     */
    [k: string]: Recipe[] | NewRecipe;
  }
  /**
   * A shaped recipe is a dictionary of result, inShape and optionally outShape
   */
  interface ShapedRecipe {
    result: RecipeItem;
    inShape: Shape;
    outShape?: Shape;
  }
  /**
   * A dictionary of at least id, optionally metadata and count. This is preferred if there are not many items at once, e.g. result in a recipe.
   */
  interface Id1Metadata1Count1 {
    id: Id;
    metadata?: Metadata;
    count?: Count;
  }
  /**
   * A shapeless recipe is a dictionary of result and ingredients
   */
  interface ShapelessRecipe {
    result: RecipeItem;
    ingredients: Ingredients;
  }
  /**
   * Bedrock recipe schema
   */
  interface NewRecipe {
    /**
     * A unique identifier for this item
     */
    name: string | null;
    /**
     * What type of recipe and block this recipe relates to
     */
    type:
      | "multi"
      | "cartography_table"
      | "stonecutter"
      | "crafting_table"
      | "crafting_table_shapeless"
      | "shulker_box"
      | "furnace"
      | "blast_furnace"
      | "smoker"
      | "soul_campfire"
      | "campfire"
      | "smithing_table";
    ingredients: [unknown, ...unknown[]];
    input?: unknown[];
    output: unknown[];
    /**
     * Specific to bedrock edition
     */
    priority?: number;
  }
  
  
  interface Tints {
    grass?: {
      data?: {
        keys?: string[];
        color?: number;
      }[];
      default?: number;
    };
    foliage?: {
      data?: {
        keys?: string[];
        color?: number;
      }[];
      default?: number;
    };
    water?: {
      data?: {
        keys?: string[];
        color?: number;
      }[];
      default?: number;
    };
    redstone?: {
      data?: {
        keys?: number[];
        color?: number;
      }[];
      default?: number;
    };
    constant?: {
      data?: {
        keys?: string[];
        color?: number;
      }[];
      default?: number;
    };
  }
  
  
  interface Version {
    /**
     * The protocol version
     */
    version?: number;
    minecraftVersion?: string;
    majorVersion?: string;
    releaseType?: string;
  }
  
  
  type Windows = [Window, ...Window[]];
  
  interface Window {
    /**
     * The unique identifier for the window
     */
    id: string;
    /**
     * The default displayed name of the window
     */
    name: string;
    /**
     * The slots displayed in the window
     */
    slots?: [
      {
        /**
         * The name of the slot or slot range
         */
        name: string;
        /**
         * The position of the slot or begin of the slot range
         */
        index: number;
        /**
         * The size of the slot range
         */
        size?: number;
      },
      ...{
        /**
         * The name of the slot or slot range
         */
        name: string;
        /**
         * The position of the slot or begin of the slot range
         */
        index: number;
        /**
         * The size of the slot range
         */
        size?: number;
      }[]
    ];
    /**
     * Names of the properties of the window
     */
    properties?: [string, ...string[]];
    openedWith?: {
      type: "item" | "entity" | "block";
      id: number;
    }[];
  }
    // This will interface will merge with the generated one
  export interface Version {
      // Returns true if the current version is greater than or equal to the `other` version's dataVersion
      ['>='](other: string): boolean
      // Returns true if the current version is greater than the `other` version's dataVersion
      ['>'](other: string): boolean
      // Returns true if the current version is less than the `other` version's dataVersion
      ['<'](other: string): boolean
      // Returns true if the current version is less than than or equal to the `other` version's dataVersion
      ['<='](other: string): boolean
      // Returns true if the current version is equal to the `other` version's dataVersion
      ['=='](other: string): boolean
      type: 'pc' | 'bedrock'
  }
  
  export interface VersionSet {
      pc: { [version: string]: Version };
      bedrock: { [version: string]: Version };
  }
  
  export interface SupportedVersions {
      pc: string[];
      bedrock: string[];
  }
  
  export interface Schemas {
      biomes: any;
      blocks: any;
      effects: any;
      entities: any;
      instruments: any;
      items: any;
      materials: any;
      protocol: any;
      protocolVersions: any;
      recipes: any;
      version: any;
      windows: any;
      foods: any;
      blockLoot: any;
      entityLoot: any;
  }
  
  export interface LoginPacket {
      entityId: number;
  
      /**
       * introduced in Minecraft 1.16.2
       */
      isHardcore?: boolean;
  
      gameMode: number;
  
      /**
       * Introduced in Minecraft 1.17
       */
      previousGameMode?: number;
      /**
       * Introduced in Minecraft 1.17
       */
      worldNames?: string[];
      /**
       * Introduced in Minecraft 1.17
       */
      dimensionCodec?: any;
  
      dimension: any;
  
      /**
       * Introduced in Minecraft 1.17
       */
      worldName?: string;
  
      hashedSeed: number;
      maxPlayers: number;
      viewDistance: number;
  
      /**
       * Introduced in Minecraft 1.18
       */
      simulationDistance?: number;
  
      reducedDebugInfo: boolean;
      enableRespawnScreen: boolean;
  
      /**
       * Introduced in Minecraft 1.17
       */
      isDebug?: boolean;    
      /**
       * Introduced in Minecraft 1.17
       */
      isFlat?: boolean;
  }
  
  export interface IndexedData {
      isNewerOrEqualTo(version: string): boolean;
      isOlderThan(version: string): boolean;
      blocks: { [id: number]: Block; };
      blocksByName: { [name: string]: Block; };
      blocksArray: Block[];
  
      loginPacket: LoginPacket;
  
      items: { [id: number]: Item; };
      itemsByName: { [name: string]: Item; };
      itemsArray: Item[];
  
      foods: { [id: number]: Food; };
      foodsByName: { [name: string]: Food; };
      foodsArray: Food[];
      foodsByFoodPoints: { [foodPoints: number]: Food; };
      foodsBySaturation: { [saturation: number]: Food; };
  
      biomes: { [id: number]: Biome; };
      biomesArray: Biome[];
      biomesByName: { [name: string]: Biome; };
  
      recipes: { [id: number]: Recipe[]; };
  
      instruments: { [id: number]: Instrument; };
      instrumentsArray: Instrument[];
  
      materials: { [name: string]: Material };
  
      mobs: { [id: number]: Entity; };
      objects: { [id: number]: Entity; };
      entitiesByName: { [name: string]: Entity; };
      entitiesArray: Entity[];
  
      enchantments: { [id: number]: Enchantment; };
      enchantmentsByName: { [name: string]: Enchantment; };
      enchantmentsArray: Enchantment[];
  
      protocol: any;
      protocolComments: any;
  
      windows: { [id: number]: Window; };
      windowsByName: { [name: string]: Window; };
      windowsArray: Window[];
  
      effects: { [id: number]: Effect; };
      effectsByName: { [name: string]: Effect; };
      effectsArray: Effect[];
  
      attributes: { [resource: string]: string; };
      attributesByName: { [name: string]: string; };
      attributesArray: [];
  
      version: Version;
  
      type: string;
  
      language: { [key: string]: string };
  
      blockLoot: { [id: number]: BlockLoot; };
      blockLootByName: { [name: string]: BlockLoot; };
  
      entityLoot: { [id: number]: EntityLoot; };
      entityLootByName: { [name: string]: EntityLoot; };
  }
  
  const versions: {
      [key in keyof SupportedVersions]: Version[];
    };
  const versionsByMinecraftVersion: VersionSet;
  const preNettyVersionsByProtocolVersion: VersionSet;
  const postNettyVersionsByProtocolVersion: VersionSet;
  const supportedVersions: SupportedVersions;
  const schemas: Schemas;
  
}

declare function MinecraftData(version: string | number): MinecraftData.IndexedData;
export = MinecraftData
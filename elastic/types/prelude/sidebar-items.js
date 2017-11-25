initSidebarItems({"constant":[["DYNAMIC_DATATYPE","Elasticsearch datatype name. "],["NESTED_DATATYPE","Elasticsearch datatype name. "],["OBJECT_DATATYPE","Elasticsearch datatype name. "]],"enum":[["DistanceUnit","A unit of measure for distance. "],["Dynamic","The dynamic setting may be set at the mapping type level, and on each inner object. Inner objects inherit the setting from their parent object or from the mapping type."],["IndexAnalysis","Should the field be searchable? Accepts `not_analyzed` (default) and `no`. "],["IndexOptions","The `index_options` parameter controls what information is added to the inverted index, for search and highlighting purposes. "],["Orientation","This parameter defines one of two coordinate system rules (Right-hand or Left-hand) each of which can be specified in a few different ways. - Right-hand rule: right, ccw, counterclockwise, - Left-hand rule: left, cw, clockwise. The default orientation (counterclockwise) complies with the OGC standard which defines outer ring vertices in counterclockwise order with inner ring(s) vertices (holes) in clockwise order."],["Strategy","The strategy defines the approach for how to represent shapes at indexing and search time. "],["StringField","A string sub-field type."],["TermVector","Term vectors contain information about the terms produced by the analysis process. "],["Tree","Name of the `PrefixTree` implementation to be used. "]],"struct":[["BasicDateTime","Format for `basic_date_time`."],["BasicDateTimeNoMillis","Format for `basic_date_time_no_millis`."],["Boolean","An Elasticsearch `boolean` with a mapping."],["Byte","Number type with a given mapping. "],["ChronoFormat","Format for default `chrono::DateTime`. "],["Date","An Elasticsearch `date` type with a required `time` component."],["DateExpr","A date math expression."],["DateValue","A date value produced and consumed by date formats."],["DefaultBooleanMapping","Default mapping for `bool`. "],["DefaultByteMapping","Default mapping for a `byte` type. "],["DefaultDateMapping","Default mapping for `date`. "],["DefaultDoubleMapping","Default mapping for a `double` type. "],["DefaultFloatMapping","Default mapping for a `float` type. "],["DefaultGeoPointMapping","Default mapping for `geo_point`. "],["DefaultGeoShapeMapping","Default mapping for `geo_shape`. "],["DefaultIntegerMapping","Default mapping for an `integer` type. "],["DefaultIpMapping","Default mapping for `geo_shape`. "],["DefaultKeywordMapping","Default mapping for `bool`. "],["DefaultLongMapping","Default mapping for a `long` type. "],["DefaultShortMapping","Default mapping for a `short` type. "],["DefaultStringMapping","Default mapping for `String`. "],["DefaultTextMapping","Default mapping for `text`. "],["Distance","A distance value paired with a unit of measure. "],["Double","Number type with a given mapping. "],["ElasticCompletionFieldMapping","A multi-field string mapping for a completion suggester. "],["ElasticTokenCountFieldMapping","A multi-field string mapping for a token count. "],["EpochMillis","Format for `epoch_millis`."],["FieldDataFrequencyFilter","Fielddata for term frequency as a percentage range. "],["Float","Number type with a given mapping. "],["FormattableDateValue","A date value paired with a format."],["FormattedDate","A formatted date."],["GeoPoint","An Elasticsearch `geo_point` type with a format."],["GeoPointArray","Geo-point expressed as an array with the format: `[lon, lat]` "],["GeoPointHash","Geo-point expressed as a geohash. "],["GeoPointObject","Geo-point expressed as an object, with `lat` and `lon` keys. "],["GeoPointString","Geo-point expressed as a string with the format: `\"lat,lon\"`. "],["GeoShape","Geo shape type with a given mapping."],["IndexDocumentMapping","A wrapper type for serialising user types."],["Integer","Number type with a given mapping. "],["Ip","An Elasticsearch `ip` with a mapping."],["Keyword","An Elasticsearch `keyword` with a mapping."],["KeywordFieldMapping","A multi-field string mapping. "],["Long","Number type with a given mapping. "],["ParseError","Represents an error encountered during parsing. "],["Short","Number type with a given mapping. "],["Text","An Elasticsearch `text` field with a mapping."],["TextFieldMapping","A multi-field string mapping. "],["ValueDocumentMapping","Mapping for an anonymous json object. "]],"trait":[["BooleanFieldType","A field that will be mapped as a `boolean`. "],["BooleanMapping","The base requirements for mapping a `boolean` type."],["ByteFieldType","A field that will be mapped as a number. "],["ByteMapping","Base `number` mapping. "],["DateFieldType","A field that will be mapped as a `date`. "],["DateFormat","A format used for parsing and formatting dates."],["DateMapping","The base requirements for mapping a `date` type."],["Datelike","The common set of methods for date component."],["DocumentFieldType","A field that will be mapped as a nested document. "],["DocumentMapping","The base requirements for mapping an `object` type. "],["DocumentType","The additional fields available to an indexable Elasticsearch type."],["DoubleFieldType","A field that will be mapped as a number. "],["DoubleMapping","Base `number` mapping. "],["FloatFieldType","A field that will be mapped as a number. "],["FloatMapping","Base `number` mapping. "],["GeoPointFieldType","A field that will be mapped as a `geo_point`. "],["GeoPointFormat","A format used for parsing and formatting geo points. "],["GeoPointMapping","The base requirements for mapping a `geo_point` type."],["GeoShapeFieldType","A field that will be mapped as a `geo_shape`. "],["GeoShapeMapping","The base requirements for mapping a `geo_shape` type."],["IntegerFieldType","A field that will be mapped as a number. "],["IntegerMapping","Base `number` mapping. "],["IpFieldType","A field that will be mapped as an `ip`. "],["IpMapping","The base requirements for mapping a `ip` type."],["KeywordFieldType","A field that will be mapped as a `keyword`. "],["KeywordMapping","The base requirements for mapping a `string` type."],["LongFieldType","A field that will be mapped as a number. "],["LongMapping","Base `number` mapping. "],["PropertiesMapping","Serialisation for the mapping of object properties."],["ShortFieldType","A field that will be mapped as a number. "],["ShortMapping","Base `number` mapping. "],["TextFieldType","A field that will be mapped as `text`. "],["TextMapping","The base requirements for mapping a `string` type."],["Timelike","The common set of methods for time component."]],"type":[["ChronoDateTime","A re-export of the `chrono::DateTime` struct with `Utc` timezone. "],["DefaultDateFormat","The default `date` format (`BasicDateTime`). "],["DefaultGeoPointFormat","The default `geo_point` format (`GeoPointArray`). "]]});
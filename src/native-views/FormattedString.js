import { FormattedString, Span } from '@nativescript/core'
import { named, makeView } from './mixin.js'
import { addToArrayProp, removeFromArrayProp } from '../utils.js'

export const makeFormattedString = named(
	'FormattedString', 'FormattedString', FormattedString,
	_ => class FormattedStringElement extends makeView(_) {
		__dominative_onInsertChild(child, ref) {
			if (!child.__dominative_isNative || (ref && !ref.__dominative_isNative)) return super.__dominative_onInsertChild(child, ref)

			if (!(child instanceof Span)) return
			if (ref && !(ref instanceof Span)) ref = null

			addToArrayProp(this, 'spans', child, ref)

			super.__dominative_onInsertChild(child, ref)
		}

		__dominative_onRemoveChild(child) {
			if (!child.__dominative_isNative) return super.__dominative_onRemoveChild(child)
			if (!(child instanceof Span)) return

			removeFromArrayProp(this, 'spans', child)

			super.__dominative_onRemoveChild(child)
		}
	}
)

export default makeFormattedString.master()

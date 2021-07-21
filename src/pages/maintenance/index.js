import React from 'react'
import { Link, Router } from 'components/Router'

export default () => (
    <div>
        <h2>家電のメンテナンス</h2>
        <p>家電の調子が悪い時のために、修理方法、部品交換などを解説。</p>

        <ul>
        <h3>映像家電</h3>
            <li><Link to="/maintenance/tv">液晶テレビ</Link></li>
        </ul>

    </div>
)

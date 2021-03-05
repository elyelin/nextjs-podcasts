import Link from "next/link";
import slug from "../helpers/slug";

export default class extends React.Component {
  render() {
    const { podcasts, onClickPodcast } = this.props;

    return (
      <div className="podcasts">
        {podcasts.map((podcast) => (
          <a
            href={`/${slug(podcast.channel.title)}.${podcast.channel.id}/${slug(
              podcast.title
            )}.${podcast.id}`}
            className="podcast"
            key={podcast.id}
            onClick={(event) => onClickPodcast(event, podcast)}
          >
            <img src={podcast.urls.post_image.original} alt={podcast.title} />
            <h3>{podcast.title}</h3>
            <div className="meta">
              {Math.ceil(podcast.duration / 60)} minutes
            </div>
          </a>
        ))}

        <style jsx>{`
          .podcasts {
            display: grid;
            grid-gap: 15px;
            padding: 5px;
            min-height: 50px;
            min-width: 50px;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          }
          .podcast {
            display: block;
            text-decoration: none;
            color: #333;
            padding: 15px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
            cursor: pointer;
          }
          .podcast img {
            border-radius: 3px;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
            width: 100%;
          }
          .podcast:hover {
            color: #000;
          }
          .podcast h3 {
            margin: 0;
            padding: 5px;
            font-size: 0.9em;
            font-weight: 600;
            margin: 0;
            text-align: center;
          }
          .podcast .meta {
            color: #666;
            margin-top: 0.5em;
            font-size: 0.8em;
          }
        `}</style>
      </div>
    );
  }
}
